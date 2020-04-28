import React, {useState, useRef} from 'react';
import IdleTimer from "react-idle-timer";
import Modal from "react-modal";


Modal.setAppElement('#root');

function IdleTimerContainer() {
    const [isLogedIn, setisLogedIn] = useState(true);
    const [modalIsOpen, setmodalIsOpen] = useState(false);


    const IdleTimerRef = useRef(null);
    const sessionTimeoutRef = useRef(null);


    
    const onIdle = () => {
        // console.log('User is Idle');
        setmodalIsOpen(true);
        sessionTimeoutRef.current = setTimeout(logOut, 5000);    
    }
    const stayActive = () => {
        setmodalIsOpen(false);
        clearTimeout(sessionTimeoutRef.current);
        // console.log('User is active');
    }
    const logOut = () => {
        setmodalIsOpen(false);
        setisLogedIn(false);
        clearTimeout(sessionTimeoutRef.current);
        // console.log('User has logged out');
    }



    return (
        <div>
            <h1>Login Form</h1>
            { 
            isLogedIn ? <h3>Hello Ibrahim!</h3> :< h3>Hello Guest</h3>
            }
            <Modal isOpen={modalIsOpen}>
                <h2>You have been idle for a while</h2>
                <p>You will be logout soon</p>
                <div>
                    <button onClick={logOut}>Logged me out</button>
                    <button onClick={stayActive}>keep me signed in</button>
                </div>
            </Modal>
            <IdleTimer ref = {IdleTimerRef} timeout ={5*1000} onIdle={onIdle}></IdleTimer>
        </div>
    )
}

export default IdleTimerContainer
