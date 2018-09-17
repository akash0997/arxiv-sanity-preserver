This project is a fork of https://github.com/karpathy/arxiv-sanity-preserver.

This is a Single Page Application. Most of the data fetching is done with ajax requests using axios.

The root of the React project is src/index.js and the heavy-lifting is done in src/App.js

I am trying to better understand this application as well as trying to simplify the javascript using React. I am also working on giving it a better design using bulma.css



My main aim of this project is to understand the data engineering involved and be deeply involved with open-source.

I have incorporated create-react-app in this project. Most of the React files are under the src/ folder.

To run this project, follow instructions in [data_engineering.md](https://github.com/pranayaryal/arxiv-sanity-preserver/blob/pranay_features/data_engineering.md). Make sure you have mongodb installed and running.

You will need to ensure that you have a virtualenv set up for the project and do `pip install -r requirements.txt`

You will also have to do `npm install` in the project root directory to install all node_modules.

Then run `npm run build` to build the static production css and javascript files.

 You may use one terminal to run `python serve.py` and the other terminal to build the css and javascript by typing `npm run build`


