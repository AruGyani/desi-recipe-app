import React from 'react'
import "../styles/Home.css"

function HomeJumbotron() {
    return (
        <div className="container-fluid jumbo center">
            <div className="container center">
                <h1 className="display-3 welcome">welcome to <b>desitrak</b></h1>
                <h1 className="display-4"><a className="startLink" href="/calories">Get Started</a></h1>
            </div>
        </div>
    );
}

export default HomeJumbotron;