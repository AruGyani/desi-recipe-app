import React from 'react';

import '../styles/Login.css'

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: '',
            password: '',

            temp_response: null
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async fetchData() {
        const response = await fetch("/api/test");

        console.log(response.json());
    }

    handleChange(event) {
        if (event.target.id === 'loginEmail') {
            this.setState({user: event.target.value})
        }

        if (event.target.id === 'loginPassword') {
            this.setState({password: event.target.value});
        }
    }

    async handleSubmit(event) {
        event.preventDefault();

        this.fetchData();
    }

    render() {
        return (
            <div className="container-fluid center">
                <h1 className="display-4 login-header">Login</h1>
                <form className="center" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input type="email" value={this.state.user} onChange={this.handleChange} className="form-control" id="loginEmail" placeholder="Email address" required/>
                    </div>
                    <div className="form-group">
                        <input type="password" value={this.state.password} onChange={this.handleChange} className="form-control" id="loginPassword" placeholder="Password" required/>
                    </div>
                    <button type="submit" className="btn btn-primary">Login</button>
                </form>
            </div>  
        );
    }
}

export default LoginForm;