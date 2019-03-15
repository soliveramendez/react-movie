/*import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './Router';
import * as serviceWorker from './serviceWorker';

//ReactDOM.render(<Home />, document.getElementById('root'));
ReactDOM.render(<Router/>, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
*/
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppRouter from './routes';
//import registerServiceWorker from './registerServiceWorker';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <AppRouter/>
    </BrowserRouter>
    , document.getElementById('root')
);
serviceWorker.unregister();
//registerServiceWorker();
