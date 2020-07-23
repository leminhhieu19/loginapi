import React, {useState} from 'react';
import StyledHeader from '../components/styles/StyledHeader';
import { Link } from "react-router-dom";
import Modal from 'react-modal';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
const Header = () => {
    const [showModal, toggleModal] = useState(false)
    const [showRegisterModal, registerModal] = useState(false)
    return (
        <StyledHeader>
            <div className="header">
                <div className="header-right">
                    <Link className="" onClick={() => toggleModal(true)} >Login</Link>
                    <Modal className="modal1"
                        parentSelector={() => document.querySelector('#root')}
                        closeTimeoutMS={2}
                        isOpen={showModal}
                        contentLabel="modal"
                        onRequestClose={() => toggleModal(false)}
                    >
                        <LoginScreen onClick={() => toggleModal(false) } />
                    </Modal>
                    
                    
                    <Link className="" onClick={() => registerModal(true)}>Register</Link>
                    <Modal className="modal2"
                        parentSelector={() => document.querySelector('#root')}
                        closeTimeoutMS={200}
                        isOpen={showRegisterModal}
                        contentLabel="modal"
                        onRequestClose={() => registerModal(false)}>
                            <RegisterScreen onClick={()=> registerModal(true)} />
                        </Modal>
                </div>
            </div>
        </StyledHeader >
    );
};
export default Header;
