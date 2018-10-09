import argparse, feedparser
import random
import pickle
import urllib.request
import time
from utils import Config, safe_pickle_dump

def encode_feedparser_dict(d):
    if isinstance(d, feedparser.FeedParserDict) or isinstance(d, dict):
        j = {}
        for k in d.keys():
            j[k] = encode_feedparser_dict(d[k])
        return j
    elif isinstance(d, list):
        l = []
        for k in d:
            l.append(encode_feedparser_dict(k))
        return l
    else:
        return d
def parse_arxiv_url(url):
    ix = url.rfind("/")
    idversion = url[ix+1:]
    parts = idversion.split('v')
    assert len(parts) == 2, 'error parsing url' + url
    return parts[0], int(parts[1])

if __name__ == "__main__":
    base_url = 'http://export.arxiv.org/api/query?'
    parser = argparse.ArgumentParser()
    parser.add_argument('--search-query', type=str,
                        default='cat:cs.CV+OR+cat:cs.AI+OR+cat:cs.LG+OR+cat:cs.CL+OR+cat:cs.NE+OR+cat:stat.ML',
                        help='query used for arxiv API. See http://arxiv.org/help/api/user-manual#detailed_examples')
    parser.add_argument('--start-index', type=int, default=0, help='0 = most recent API result')
    parser.add_argument('--max-index', type=int, default=10000, help='upper bound on paper index we will fetch')
    parser.add_argument('--results-per-iteration', type=int, default=100, help='passed to arxiv API')
    parser.add_argument('--wait-time', type=float, default=5.0, help='lets be gentle to arxiv API (in number of seconds)' )
    parser.add_argument('--break-on-no-added', type=int, default=1, help='break out early if all returned query papers are already in db? 1=yes, 0=no')

    args = parser.parse_args()

    try:
        db = pickle.load(open(Config.db_path, 'rb'))
    except Exception as e:
        print('error loading existing database:')
        print(e)
        print('starting from an empty database')
        db={}


    for i in range(args.start_index, args.max_index, args.results_per_iteration):
        query = 'search_query=%s&start=%i&max_results=%i' % (args.search_query, i, args.results_per_iteration)
        with urllib.request.urlopen(base_url + query) as url:
            response = url.read()
        parse = feedparser.parse(response)
        num_added = 0
        num_added_total = 0
        num_skipped = 0

        for e in parse.entries:
            j=encode_feedparser_dict(parse.entries)
            break
            rawid, version = parse_arxiv_url(j['id'])
            j['_rawid'] = rawid
            j['_version'] = version

            if not rawid in db or j['_version'] > db[rawid]['_version']:
                db[rawid] = j
                print('Updated %s added %s' % (j['updated'].encode('utf-8'), j['title'].encode('utf-8')))
                num_added += 1
                num_added_total += 1
            else:
                num_skipped +=1
            
        print('Added %d papers, already had %d' % (num_added, num_skipped))

        if len(parse.entries) == 0:
            print('Received no results from arxiv. Rate limiting? Exiting. Restart later maybe.')
            print(response)
            break

        if num_added == 0 and args.break_on_no_added == 1:
            print('No new papers were added. Assuming no new papers exist. Exiting.')
            break

        print('Sleeping for %i seconds' % (args.wait_time , ))
        time.sleep(args.wait_time + random.uniform(0, 3))
    
    if num_added_total > 0:
        print('Saving database with %d papers to %s' % (len(db), Config.db_path))
        safe_pickle_dump(db, Config.db_path)

            

