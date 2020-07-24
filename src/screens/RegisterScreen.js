import React, { useState, memo } from "react";
import StyledLoginRegister from "../components/styles/StyledLoginRegister";
import { useHistory } from 'react-router-dom';
import services from "../services/Api";


const RegisterScreen = memo( function() {
    let history = useHistory();
    const [item, setUser] = useState({
        id: "",
        username: "",
        password: "",
        email: "",
        phone: "",
        address: ""
    });

    const { username, password, email, phone, address } = item;
    const onInputChange = e => {
        setUser({ ...item, [e.target.name]: e.target.value });
    };

    const onSubmit = async e => {
        e.preventDefault();
        try {
            if (password === "" || username === "" || email === "" || phone === "" || address === "") {
                alert('You need to fill in all the information!!!')
                return true;
            }
            const user = {
                username,
                password,
                email,
                phone,
                address
            }
            await services.addUser(user);
            history.push("/");
            alert("Register sucessfully");
        } catch (error) {
            console.log(error)
            alert("Register failed");
        }
    };
    return (
        <StyledLoginRegister>
            <div className="wrapper">
                <div className="title">
                    Registration
                </div>
                <form onSubmit={e => onSubmit(e)}>
                    <div className="form">
                        <div className="inputfield">
                            <label>Username</label>
                            <input title="Tên người dùng chỉ chứa những chữ cái viết thường!"
                                type="text"
                                className="input"
                                name="username"
                                value={username}
                                onChange={e => onInputChange(e)}
                            />
                        </div>
                        <div className="inputfield">
                            <label>Password</label>
                            <input title="Password ít nhất 6 ký tự"
                                type="password"
                                className="input"
                                name="password"
                                value={password}
                                onChange={e => onInputChange(e)}
                            />
                        </div>
                        <div className="inputfield">
                            <label>Email Address</label>
                            <input title="eg: abc123@gmail.com"
                                type="text"
                                className="input"
                                name="email"
                                value={email}
                                onChange={e => onInputChange(e)}
                            />
                        </div>
                        <div className="inputfield">
                            <label>Phone Number</label>
                            <input title="0987xxxxxx"
                                type="text"
                                className="input"
                                name="phone"
                                value={phone}
                                onChange={e => onInputChange(e)}
                            />
                        </div>
                        <div className="inputfield">
                            <label>Address</label>
                            <textarea title="eg: 92 Triệu Việt Vương"
                                className="textarea"
                                name="address"
                                value={address}
                                onChange={e => onInputChange(e)}
                            />
                        </div>
                        <div className="inputfield">
                            <input
                                type="submit"
                                value="Register"
                                className="btn"
                            />
                        </div>
                    </div>
                </form>
            </div>
        </StyledLoginRegister >
    );
});

export default RegisterScreen;
