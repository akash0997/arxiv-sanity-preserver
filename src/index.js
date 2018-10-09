import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.scss';
import registerServiceWorker from './registerServiceWorker';
// import 'bulma/css/bulma.min.css'
// import 'bulma/bulma.sass'
import './index.css'

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
