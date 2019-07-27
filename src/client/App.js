import React, { Component } from 'react';
import {  BrowserRouter as Router, Route } from "react-router-dom";
 
import { App , Home, Login, Register } from './containers';

class MyComponent extends Component {

    render() {
        return (
        <App/>
        )
      
    }
}
 
export default MyComponent;