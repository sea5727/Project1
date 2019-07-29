import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";

import {Logo, Login}  from './components'


ReactDOM.render( 
    <Router>
        <Route exact path="/" component={Logo}/>
        <Route path="/Login" component={Login}/>
    </Router>
    , document.getElementById('root')
);


