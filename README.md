This project is a fork of Andrej Karpathy's https://github.com/karpathy/arxiv-sanity-preserver. All the credit goes to him.

Tried to give it a new look with this Single Page Application. Most of the data fetching is done with ajax requests using axios and the styling is done using bulma.css. The work is still in progress.

This is my attempt at understanding how data is being engineered.

The root of the React project is src/index.js and the heavy-lifting is done in src/App.js.

I have incorporated create-react-app in this project. Most of the React files are under the src/ folder.

To run this project, follow instructions in [data_engineering.md](https://github.com/pranayaryal/arxiv-sanity-preserver/blob/pranay_features/data_engineering.md). Make sure you have mongodb installed and running.

You will need to ensure that you have a virtualenv set up for the project and do `pip install -r requirements.txt`

You will also have to do `npm install` in the project root directory to install all node_modules.

Then run `npm run build` to build the static production css and javascript files.

 You may use one terminal to run `python serve.py` and the other terminal to build the css and javascript by typing `npm run build`


