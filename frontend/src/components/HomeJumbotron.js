import React from 'react'
import "../styles/Home.css"

function HomeJumbotron() {
    return (
        <div className="jumbotron jumbotron-fluid center">
            <div className="container">
                <h1 className="display-3 welcome">welcome to <b>desitrak</b></h1>
                <h1 className="display-4"><a className="startLink" href="/login">Get Started</a></h1>
            </div>
        </div>
    );
}

export default HomeJumbotron;