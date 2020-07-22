import React from 'react'
import '../../stylesheets/NavBar.css'

export default function NavBar(props) {

    const handleClick = (clickedTab) => {
        props.setActiveTab(clickedTab)
    }

    return (
        <div className="navbar-div">
            <nav className="navbar-nav">
                <ul className="navbar-ul">
                    <li className="home">
                        <div onClick={() => handleClick("home")}>
                            <span className="link-text">Home</span>
                        </div>
                    </li>
                    <li className="projects">
                        <div onClick={() => handleClick("projects")}>
                            <span className="link-text">Projects</span>
                        </div>
                    </li>
                    <li className="resume">
                        <div onClick={() => handleClick("resume")}>
                            <span className="link-text">Resume</span>
                        </div>
                    </li>
                    <li className="contact-info">
                        <div onClick={() => handleClick("contact-info")}>
                            <span className="link-text">Contact Info</span>
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
    )
}