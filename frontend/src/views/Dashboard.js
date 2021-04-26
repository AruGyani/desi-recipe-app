import React from 'react';
import Login from './Login'

function Dashboard(props) {
    if (!props.token) {
        return <Login setToken={props.setToken}/>
    }

    return (
        <h1>Dashboard</h1>
    )
}

export default Dashboard;