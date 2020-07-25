import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Header from './Header.js';
import Items from './Items.js';

ReactDOM.render(<div>
     <Header/>
     <Items/>
</div>,document.getElementById("root"));


