import React from 'react';

import LoginForm from '../components/LoginForm'

function Login(props) {
    return (
        <div>
            <LoginForm setToken={props.setToken}/>
        </div>
    )
}

export default Login;