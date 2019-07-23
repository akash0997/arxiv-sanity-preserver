import pickle
import time
import random
from urllib2 import urlopen
from utils import Config
import shutil
import os

db = pickle.load(open(Config.db_path, 'rb'))
timeout_secs = 10
have = set(os.listdir(Config.pdf_dir))

data_folder = Config.pdf_dir

numok = 0
numtot = 0

for pid, j in db.items():
    pdfs = [x['href'] for x in j['links'] if x['type'] == 'application/pdf']
    pdf_url = pdfs[0] + '.pdf'
    basename = pdf_url.split('/')[-1]
    fname = os.path.join(Config.pdf_dir, basename)
    numtot +=1

    try:
        if not basename in have:
            print('fetching %s into %s' % (pdf_url, fname))
            req = urlopen(pdf_url, None, timeout_secs)
            with open(fname, 'wb') as fp:
                shutil.copyfileobj(req, fp)
            time.sleep(0.05 + random.uniform(0, 0.1))
        else:
            print('%s exists, skipping' % (fname))
        numok +=1
    except Exception as e:
        print('error downloading ', pdf_url)
        print(e)

    print('%d/%d of %d downloaded ok' % (numok, numtot, len(db)))

    if numok == 10:
        break

print('Final number of papers downloaded okay: %d/%d' % (numok, len(db)))
