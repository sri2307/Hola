import React from 'react';

import {GoogleOutlined,FacebookOutlined} from '@ant-design/icons';
import firebase from "firebase/app";
import {auth} from "../firebase"


const Login=()=>{

    const googleLoginHandler = ()=>{
        auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
    }
    const facebookLoginHandler = ()=>{
        auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider());
    }

    return (
        <div id="login-page">
            <div id="login-card">
                <h2>Welcome to Hola !</h2>
                <h4>Personal Messanger</h4>
                <div className="login-button google" onClick={googleLoginHandler}>
                    <GoogleOutlined/> Sign In with Google
                </div>
                <br/><br/>
                <div className="login-button facebook" onClick={facebookLoginHandler}>
                    <FacebookOutlined/> Sign In with Facebook
                </div>

            </div>
        </div>
    )

}

export default Login;