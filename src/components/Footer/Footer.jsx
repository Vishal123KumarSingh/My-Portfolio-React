import React from "react";
import './Footer.css'
import Wave from "../../img/wave.png";

import GitHub from '@iconscout/react-unicons/icons/uil-github';
import Facebook from '@iconscout/react-unicons/icons/uil-facebook';
import Insta from '@iconscout/react-unicons/icons/uil-instagram';
import Linked from '@iconscout/react-unicons/icons/uil-linkedin';




function Footer(){
    return(
        <div className="footer">
            <img src={Wave} style={{width:"100%"}}></img>
            <div className="f-content">
                <span>vishalkumar2022001@gmail.com</span>
                <div className="f-icons">
                    <Insta size="3rem" />
                    <Facebook size="3rem"  />
                    <GitHub size="3rem" />
                    <Linked size="3rem"/>

                </div>
                <span>@ 2022</span>
            </div>
        </div>
    )

}

export default Footer;