import React from "react";
import "./Intro.css";
import Github from "../../img/github.png";
import Linkedin from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/my-img.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import glassesimoji from '../../img/glassesimoji.png';
import Floating from "../Floating/Floating";
import { themeContext } from "../../context";
import { useContext } from "react";

import { motion } from "framer-motion";

function Intro() {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    const transition = { duration: 10, type: 'spring' }
    return (

        <div className="intro" id="Navbar">
            <div className="i-left">
                <div className="i-name">
                    <span style={{ color: darkMode ? 'white' : '' }}>Hello! I am</span>
                    <span>Vishal Kumar</span>
                    <span style={{ color: darkMode ? 'white' : '' }}>A Beginner level of full stack Web Developer ,
                        I Use MERN Tech for Full stack Web Development. </span>
                </div>
                <button className="i-button button">Hire Me</button>
                <div className="i-icons" >
                    <a href="https://github.com/Vishal123KumarSingh" target="_blank"><img src={Github}></img></a>
                    <a href="https://www.linkedin.com/in/vishal-kumar-67b9281b7/" target="_blank"><img src={Linkedin}></img></a>
                    <a href="https://www.instagram.com/" target="_blank"><img src={Instagram}></img></a>
                </div>

            </div>
            <diV className="i-right">
                <img src={Vector1}></img>
                <img src={Vector2}></img>
                <img src={boy}></img>
                <motion.img
                    initial={{ left: '-36%', top: '-20%' }}
                    whileInView={{ left: '-24%', top: '-5%' }}
                    transition={transition}
                    src={glassesimoji} />
                <motion.div className="Floating"
                    initial={{ left: '70%', top: '-10%' }}
                    whileInView={{ left: '60%', top: '-2%' }}
                    transition={transition}
                >
                    <Floating image={crown} text1="Web" text2="Development" />
                </motion.div>

                <div className="blur"></div>
            </diV>
        </div>
    );
}
export default Intro;