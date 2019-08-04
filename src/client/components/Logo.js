import React, {Component} from 'react';
import { Link } from 'react-router-dom'

// import jQuery from "jquery";
// window.$ = window.jQuery = jQuery;
class Logo extends Component{
    render(){

           return (
            <div>
                   <ul id="dropdown1" className="dropdown-content">
                       <li><a href="#!">one</a></li>
                       <li><a href="#!">two</a></li>
                       <li className="divider"></li>
                       <li><a href="#!">three</a></li>
                   </ul>
                   <nav>
                       <div className="nav-wrapper">
                           <Link to="/" className="brand-logo center">Logo</Link>
                           <ul className="left">
                            <li><a className="dropdown-button" href="#!" data-activates="dropdown1">Menu<i className="material-icons right">arrow_drop_down</i></a></li>
                            </ul>
                           <ul className="right hide-on-med-and-down">
                               <li><Link to="Login">Login</Link></li>
                               <li><Link to="Register">Sign</Link></li>
                           </ul>
                       </div>
                   </nav>
            </div>
        );
    }
}

export default Logo;