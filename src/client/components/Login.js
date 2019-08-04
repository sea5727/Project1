import React , {Component} from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'
import './Login.css'
class Login extends Component{
    constructor(){
        super();
        this.state = {
            user : {
                email: "",
                password : "",
            },
            flag : {
                remember : "",
            }
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        var { user , flag : { remember} } = this.state;
        if(event.target.id == "remember"){
            remember = event.target.checked;
        }
        else {
            user[event.target.id] = event.target.value;
        }
        
        this.setState({ user , flag : { remember}});
    }
    handleSubmit = async event => {
        console.log('handleSubmit... state:', this.state);
        event.preventDefault();
        const { user } = this.state;
        try {
            // axios.post('/api/Account/login', {loginData}).then((res) => {
            //     if(res.status==200) this.props.history.push("/");
            // })
            var res = await axios.post('/api/Account/login' , {user});
            if(res.status == 200){
                this.props.history.push("/");
            }
            else {
               this.setState({id : 'failure'});
            }
        }
        catch(e){
            console.log(e);
            alert(e.response.data.message);
        }

    }

    render(){
        const { email, password , flag : { remember }} = this.state;
        return (
            <div id="login-page" className="row">
                <div className="col s12 z-depth-6 card-panel">
                    <form className="login-form" onSubmit={this.handleSubmit}>
                        <div className="row">
                            <div className="input-field col s12 center">
                                <h4>Login</h4>
                                <p className="center">Input Your Email and Password! </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <i className="material-icons prefix">mail_outline</i>
                                <input className="validate" id="email" type="email" value={email} onChange={this.handleChange} />
                                <label htmlFor="email" data-error="wrong" data-success="right">Email</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <i className="material-icons prefix">lock_outline</i>
                                <input id="password" type="password" value={password} onChange={this.handleChange}/>
                                <label htmlFor="password">Password</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12 m12 l12  login-text">
                                <input type="checkbox" id="remember" value={remember} onChange={this.handleChange}/>
                                <label htmlFor="remember">Remember</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <button type="submit" className="btn waves-effect waves-light col s12" >Login</button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s6 m6 l6">
                                <p className="margin medium-small"><Link to="/Register">Register Now!</Link></p>
                            </div>
                            <div className="input-field col s6 m6 l6">
                                <p className="margin right-align medium-small"><Link to="/ForgotPassword">Forgot password?</Link></p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        );
    }
}

export default Login;
