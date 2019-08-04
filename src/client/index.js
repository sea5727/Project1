import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";

import {Logo, Login, Register}  from './components'


ReactDOM.render( 
    <Router>
        <Route exact path="/" component={Logo}/>
        <Route path="/Login" component={Login}/>
        <Route path="/Register" component={Register}/>
    </Router>
    , document.getElementById('root')
);



