import React from "react";
import StyledLoginRegister from "../components/styles/StyledLoginRegister";

const ForgotPassScreen = () => {
    return (
        <StyledLoginRegister>
            <div className="wrapper">
                <div className="title">
                    Forgot Password
                </div>
                <div className="recommend">
                    Please Enter your email address and we'll send you instruction on how to reset your password
                </div>
                <form>
                    <div className="form">
                        <div className="inputfield">
                            <label>Email</label>
                            <input
                                placeholder="Enter your email"
                                type="text"
                                class="input"
                            />
                        </div>
                        <div className="inputfield">
                            <input
                                type="submit"
                                value="Submit"
                                className="btn"
                            />
                        </div>
                    </div>
                </form>
            </div>
        </StyledLoginRegister >
    );
};

export default ForgotPassScreen;
