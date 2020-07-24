import React, {useState, memo} from 'react';
import StyledHeader from '../components/styles/StyledHeader';
import { Link } from "react-router-dom";
import Modal from 'react-modal';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
Modal.setAppElement('#root')
const Header = memo(function() {
    const [showModal, toggleModal] = useState(true)
    const [showRegisterModal, registerModal] = useState(false)
    return (
        <StyledHeader>
            <div className="header">
                <div className="header-right">
                    <Link onClick={() => toggleModal(true)} >Login</Link>
                    <Modal className="modal1"
                        
                        closeTimeoutMS={2}
                        isOpen={showModal}
                        contentLabel="modal"
                        onRequestClose={() => toggleModal(false)}
                        style={{
                            
                            overlay: {
                            overflow: 'hidden',
                              position: 'fixed',
                              top: 0,
                              left: 0,
                              right: 0,
                              bottom: 0,
                              backgroundColor: 'rgba(255, 255, 255, 0.75)'
                            },
                            content: {
                              position: 'absolute',
                              top: '40px',
                              left: '40px',
                              right: '40px',
                              bottom: '40px',
                              border: '1px solid #ccc',
                              background: '#fff',
                              overflow: 'auto',
                              WebkitOverflowScrolling: 'touch',
                              borderRadius: '4px',
                              outline: 'none',
                              padding: '20px'
                            }
                            
                          }}
                    >
                            <div className='modal-footer'>
                                <Link onClick={() =>toggleModal(false)}>Close</Link>
                             </div>
                        <LoginScreen onClick={() => toggleModal(true) } />
                        
                    </Modal>
                    
                    
                    <Link onClick={() => registerModal(true)}>Register</Link>
                    <Modal className="modal2"

                        closeTimeoutMS={200}
                        isOpen={showRegisterModal}
                        contentLabel="modal"
                        onRequestClose={() => registerModal(false)}
                        style={{
                            
                            overlay: {
                            overflow: 'hidden',
                              position: 'fixed',
                              top: 0,
                              left: 0,
                              right: 0,
                              bottom: 0,
                              backgroundColor: 'rgba(255, 255, 255, 0.75)'
                            },
                            content: {
                              position: 'absolute',
                              top: '40px',
                              left: '40px',
                              right: '40px',
                              bottom: '40px',
                              border: '1px solid #ccc',
                              background: '#fff',
                              overflow: 'auto',
                              WebkitOverflowScrolling: 'touch',
                              borderRadius: '4px',
                              outline: 'none',
                              padding: '20px'
                            }
                            
                          }}>
                              <div className='modal-footer'>
                                <Link onClick={() =>registerModal(false)}>Close</Link>
                             </div>
                            <RegisterScreen onClick={()=> registerModal(true)} />
                        </Modal>
                </div>
            </div>
        </StyledHeader >
    );
});
export default Header;
