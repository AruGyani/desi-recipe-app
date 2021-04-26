import React from 'react';
import Login from './Login'

function Dashboard(props) {
    let username = JSON.parse(sessionStorage.getItem('user'));

    if (!props.token) {
        return <Login setToken={props.setToken}/>
    }

    return (
        <h1>{username}</h1>
    )
}

export default Dashboard;