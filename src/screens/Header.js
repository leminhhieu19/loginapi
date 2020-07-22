import * as React from 'react';
import StyledHeader from '../components/styles/StyledHeader';
import { Link } from "react-router-dom";

const Header = () => {

    return (
        <StyledHeader>
            <div className="header">
                <div className="header-right">
                    <Link className="" to="/auths/login">Login</Link>
                    <Link className="" to="/auths/register">Register</Link>
                </div>
            </div>
        </StyledHeader >
    );
};
export default Header;