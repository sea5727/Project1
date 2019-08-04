import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import './Register.css'

class Register extends Component{
    constructor(){
        super();
        this.state={
            user : {
                email : '',
                username : '',
                password: '',
                re_password : '',
            },
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        var { user } = this.state;
        user[event.target.id] = event.target.value
        this.setState({ user });
    }
    handleSubmit = async event => {
        event.preventDefault();
        const { user } = this.state;
        
        try{
            var res = await axios.post('/api/Account/register', {user});
            if (res.status == 200) {
                alert('회원가입에 성공하였습니다')
                this.props.history.push("/Login");
            } 
        }
        catch(e){
            console.log(e);
            alert(e.response.data.message);
            // alert('회원가입에 실패하였습니다. \n관리자에게 문의하십시오.\n' + e + '\n' + e.response.status)
        }

    }   
    render() {
        const { username, email, password , re_password} = this.state;
        return (
            <div id="register-page" className="row">
                <div className="col s12 z-depth-4 card-panel">
                    <form onSubmit={this.handleSubmit} className="register-form">
                        <div className="row">
                            <div className="input-field col s12 center">
                                <h4>Register</h4>
                                <p className="center">Join to our community now !</p>
                            </div>
                        </div>
 
                         <div className="row margin">
                            <div className="input-field col s12">
                                <i className="material-icons prefix">email</i>
                                <input className="validate" id="email" type="email" valule={email} onChange={this.handleChange} />
                                <label htmlFor="email" data-error="wrong" data-success="right">Email</label>
                            </div>
                        </div>

                        <div className="row margin">
                            <div className="input-field col s12">
                                <i className="material-icons prefix">account_circle</i>
                                <input id="username" value={username} type="text" onChange={this.handleChange} />
                                <label htmlFor="username">Username</label>
                            </div>
                        </div>

                        <div className="row margin">
                            <div className="input-field col s12">
                                <i className="material-icons prefix">vpn_key</i>
                                <input id="password" type="password" value={password} onChange={this.handleChange} />
                                <label htmlFor="password">Password</label>
                            </div>
                        </div>

                        <div className="row margin">
                            <div className="input-field col s12">
                                <i className="material-icons prefix">vpn_key</i>
                                <input id="re_password" type="password" value={re_password} onChange={this.handleChange} />
                                <label htmlFor="re_password">Password again</label>
                            </div>
                        </div>

                        <div className="row">
                            <div className="input-field col s12">
                                <button type="submit" className="btn waves-effect waves-light col s12">REGISTER NOW</button>
                            </div>
                            <div className="input-field col s12">
                                <p className="margin center medium-small sign-up">Already have an account? <Link to="/Login">Login</Link></p>
                            </div>
                        </div> 


                    </form>
                </div>
            </div>
        );
    }
}

export default Register