import React from 'react';

import '../styles/Login.css'

function LoginForm() {
    return (
        <div className="container-fluid center">
            <h1 className="display-4 login-header">Login</h1>
            <div class="form-group">
                <input type="email" class="form-control" id="loginEmail" placeHolder="Email address"/>
            </div>
            <div class="form-group">
                <input type="password" class="form-control" id="loginPassword" placeHolder="Password"/>
            </div>
            <button type="submit" class="btn btn-primary">Login</button>
        </div>  
    );
}

export default LoginForm;