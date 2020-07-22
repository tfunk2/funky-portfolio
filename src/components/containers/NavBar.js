import React from 'react'
import '../../stylesheets/NavBar.css'
import CompletedTFlogo from '../../images/completed_TF_logo.jpg'

export default function NavBar(props) {

    const handleClick = (clickedTab) => {
        props.setActiveTab(clickedTab)
    }

    return (
        <div className="navbar-div">
            <nav className="navbar-nav">
                <ul className="navbar-ul-left">
                    <li>
                        <img 
                            id="main-logo-img"
                            alt="main logo made with T and F" 
                            src={CompletedTFlogo}
                        >
                        </img>
                    </li>
                </ul>
                <ul className="navbar-ul-right">
                    <li className="navbar-li" id="home" onClick={() => handleClick("home")}>
                        <div className="link-div">
                            <span className="link-text">Home</span>
                        </div>
                    </li>
                    <li className="navbar-li" id="projects" onClick={() => handleClick("projects")}>
                        <div className="link-div">
                            <span className="link-text">Projects</span>
                        </div>
                    </li>
                    <li className="navbar-li" id="resume" onClick={() => handleClick("resume")}>
                        <div className="link-div">
                            <span className="link-text">Resume</span>
                        </div>
                    </li>
                    <li className="navbar-li" id="contact-info" onClick={() => handleClick("contact-info")}>
                        <div className="link-div">
                            <span className="link-text">Contact Info</span>
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
    )
}