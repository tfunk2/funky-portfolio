import React from 'react';
import '../../stylesheets/Home.css'
import TFHeadShot from '../../images/DSC_5501.JPG'

export default function Home(props) {
    return(
        <div className="home-div">
            <h3 >
                Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt 
                ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis 
                nostrud exercitation ullamco 
                laboris nisi ut aliquip ex ea 
                commodo consequat. Duis aute irure 
                dolor in reprehenderit in voluptate 
                velit esse cillum dolore eu fugiat 
                nulla pariatur. Excepteur sint 
                occaecat cupidatat non proident, 
                sunt in culpa qui officia deserunt 
                mollit anim id est laborum.
            </h3>
            <img src={TFHeadShot} className="headshot"></img>
        </div>
    )
}