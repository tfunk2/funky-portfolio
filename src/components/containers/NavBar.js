import React from 'react'
import '../../stylesheets/NavBar.css'
import CompletedTFlogo from '../../images/completed_TF_logo.jpg'

export default function NavBar({ setActiveTab }) {

    const handleClick = (clickedTab) => {
        setActiveTab(clickedTab)
    }

    return (
        <div className="navbar-div">
            <nav className="navbar-nav">
                <ul className="navbar-ul-left">
                    <li onClick={() => handleClick("home")}>
                        <img 
                            id="main-logo-img"
                            alt="main logo made with T and F" 
                            src={CompletedTFlogo}
                        >
                        </img>
                    </li>
                </ul>
                <ul className="navbar-ul-right">
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
                    <li className="navbar-li" id="about" onClick={() => handleClick("about")}>
                        <div className="link-div">
                            <span className="link-text">About</span>
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
    )
}