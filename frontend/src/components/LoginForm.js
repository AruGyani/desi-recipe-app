import React, { useState } from 'react';
import PropTypes from 'prop-types';

import '../styles/Login.css'

// const crypto = require('crypto');
// const csprng = require('csprng');

async function loginUser(credentials) {
    return fetch(`http://localhost:8080/api/login/get`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            user: credentials.username,
            // hashed: credentials.hashed,
            pass: credentials.password
        })
    }).then(data => data.json());
}

function LoginForm(props) {
    const [username, setUser] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();

        // let salt = csprng(160, 36);
        // let hashed = hash(`${salt}${password}`);

        const token = await loginUser({
            username,
            password
        });

        if (!token.error) {
            props.setToken(token);
        }
    }

    return (
        <div className="container-fluid center">
            <h1 className="display-4 login-header">Login</h1>
            <form className="center" onSubmit={handleSubmit}>
                <div className="form-group">
                    <input type="text" onChange={e => setUser(e.target.value)} className="form-control loginControl" id="loginUser" placeholder="Username" required/>
                </div>
                <div className="form-group">
                    <input type="password" onChange={e => setPassword(e.target.value)} className="form-control loginControl" id="loginPassword" placeholder="Password" required/>
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>  
    );
}

LoginForm.propTypes = {
    setToken: PropTypes.func.isRequired
}

// function hash(key) {
//     return crypto
//             .createHash("sha256")
//             .update(key)
//             .digest("base64");
// }

export default LoginForm;