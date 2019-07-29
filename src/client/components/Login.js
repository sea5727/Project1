import React , {Component} from 'react';

class Login extends Component{
    render(){
        return (
            <div>
                <form action="/api/Login" method="get">
                    <input type="text" name="id" value="ID"/>
                    <input type="password" name="password" value="Password"/>
                    <input type="submit"></input>
                </form>
            </div>
        );
    }
}

export default Login;