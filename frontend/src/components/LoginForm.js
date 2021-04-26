import React, { useState } from 'react';
import PropTypes from 'prop-types';

import '../styles/Login.css'

async function loginUser(credentials) {
    return fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
            username: credentials.username,
            password: credentials.password
        })
    }).then(data => data.json());
}

function LoginForm({ setToken }) {
    const [username, setUser] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();

        const token = await loginUser({
            username,
            password
        });

        setToken(token);
    }

    return (
        <div className="container-fluid center">
            <h1 className="display-4 login-header">Login</h1>
            <form className="center" onSubmit={handleSubmit}>
                <div className="form-group">
                    <input type="email" onChange={e => setUser(e.target.value)} className="form-control" id="loginEmail" placeholder="Email address" required/>
                </div>
                <div className="form-group">
                    <input type="password" onChange={e => setPassword(e.target.value)} className="form-control" id="loginPassword" placeholder="Password" required/>
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>  
    );
}

LoginForm.propTypes = {
    setToken: PropTypes.func.isRequired
}

export default LoginForm;