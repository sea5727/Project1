import React, {Component} from 'react';
import { Link } from 'react-router-dom'

// import jQuery from "jquery";
// window.$ = window.jQuery = jQuery;
class Logo extends Component{
    render(){

           return (
            <div>
                   <ul id="dropdown1" class="dropdown-content">
                       <li><a href="#!">one</a></li>
                       <li><a href="#!">two</a></li>
                       <li class="divider"></li>
                       <li><a href="#!">three</a></li>
                   </ul>
                   <nav>
                       <div class="nav-wrapper">
                           <Link to="/" class="brand-logo center">Logo</Link>
                           <ul class="left">
                            <li><a class="dropdown-button" href="#!" data-activates="dropdown1">Menu<i class="material-icons right">arrow_drop_down</i></a></li>
                            </ul>
                           <ul class="right hide-on-med-and-down">
                               <li><Link to="Login">Login</Link></li>
                               <li><a href="badges.html">Sign</a></li>
                           </ul>
                       </div>
                   </nav>
            </div>
        );
    }
}

export default Logo;