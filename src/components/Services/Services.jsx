import React from "react";
import "./Services.css";
import Card from "../Card/Card";
import Heartemoji from "../../img/heartemoji.png"
import Resume from './Vishal Resume (3).pdf'
import { themeContext } from "../../context";
import { useContext } from "react";
import { motion } from "framer-motion";

function Services() {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    const transition = { duration: 12, type: 'spring' };
    return (
        <div className="services" id="Services">
            <div className="s-left">
                <div className="awesome">
                    <span style={{ color: darkMode ? 'white' : '' }}>My Awesome</span>
                    <span>Services</span>
                    <span style={{ color: darkMode ? 'white' : '' }}>Ecommerce Website Design. Converting casual online buyers into loyal customers thats what you want as an online...
                        <br ></br>
                        Web Application Development. An interactive web application readily amplifies user engagement. Our user-centred web apps...
                    </span>
                </div>
                <a href={Resume} download><button className="button s-button">Download CV</button></a>
                <div className="blur s-blurl" style={{ background: "#ABF1FF94" }}>ghgrsrerearfrrrqwq</div>

            </div>



            <div className="s-right">
                <motion.div style={{ left: '10rem', top: '-3rem' }}
                    initial={{ left: '55%', top: '-20%' }}
                    whileInView={{ left: '25%', top: '-10%' }}
                    transition={transition}>
                    <Card
                        emoji={Heartemoji}
                        heading={"Developer"}
                        detail={"HTML, CSS, JavaScript, Node.js, React.js"}
                    />
                </motion.div>

                <motion.div
                    style={{ left: '-7rem', top: '13rem' }}
                    initial={{ left: '-25%', top: '50%' }}
                    whileInView={{ left: '-13%', top: '40%' }}
                    transition={transition}>
                    <Card
                        emoji={Heartemoji}
                        heading={"Programmer"}
                        detail={"C, C++, Python, Data Structure, Algorithm"}
                    />
                </motion.div>

                <motion.div style={{ left: '12rem', top: '13rem' }}
                    initial={{ left: '55%', top: '50%' }}
                    whileInView={{ left: '45%', top: '40%' }}
                    transition={transition}>
                
                    <Card
                        emoji={Heartemoji}
                        heading={"Programmer"}
                        detail={"C, C++, Python, Data Structure, Algorithm"}
                    />
                </motion.div>

                <div className="blur s-blur2" style={{ background: "var(--purple" }}>ghgrsrerearfrrrqwq</div>
            </div>
        </div>
    );
}

export default Services