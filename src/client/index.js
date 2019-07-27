import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
// import {Router, Route} from 'react-router';
// import { BrowserRouter } from 'react-router-dom';

import {  BrowserRouter as Router, Route } from "react-router-dom";

import MyComponent from './App.js'
import { App , Home, Login, Register } from './containers';
 
// ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render( 
    <Router>
        <Route exact path="/" component={App}/>
        <Route path="/Login" component={Login}/>
        <Route path="/Register" component={Register}/>        
    </Router>
    , document.getElementById('root')
);

