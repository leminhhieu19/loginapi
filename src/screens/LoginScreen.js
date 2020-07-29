import React, { useState } from "react";
import StyledLoginRegister from "../components/styles/StyledLoginRegister";
import { Link, Redirect} from "react-router-dom";
import axios from "axios";

const LoginScreen = () => {
    const [user, setUser] = useState({
        userName: '',
        password: '',
        login: false,
        token: '',
    });
    const { userName, password } = user;
    const onChange = e => {
        setUser({...user, [e.target.name]: e.target.value });
    };
    const submitForm = e => {
        e.preventDefault();
        axios.post(`https://milky-auth.herokuapp.com/login`, {
            userName: userName,
            password: password,
          
        }).then(res => {
            localStorage.setItem('example-jwt-jwt', res.data.result.access_token);
          //   props.history.push({
          //     pathname: `http://localhost:3003/users`,
          // })
        });
        
    }
    return (
        <StyledLoginRegister>
            <div className="wrapper">
                <div className="title">
                    Login
            </div>
                <form onSubmit={e => submitForm(e)}>
                    <div className="form">
                        <div className="inputfield">
                            <label>Username</label>
                            <input type="text" className="input" name="userName" value={userName} onChange={e => onChange(e)} />
                        </div>
                        <div className="inputfield">
                            <label>Password</label>
                            <input type="password" className="input" name="password" value={password} onChange={e => onChange(e)}/>
                        </div>
                        <div className="inputfield">
                            <input type="submit" value="Login" className="btn" />
                        </div>
                    </div>
                </form>

                <div className="forgot">
                    <Link className="" to="/auths/forgotpassword">Forgot password</Link>
          
                </div>
            </div>
        </StyledLoginRegister >
    )
}

export default LoginScreen;
