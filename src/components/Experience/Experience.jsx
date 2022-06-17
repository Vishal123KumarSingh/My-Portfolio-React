import React from "react";
import './Experience.css'
import { themeContext } from "../../context";
import { useContext } from "react";

function Experience(){
    const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

    return(
        <div className="experience" id="Experiences">
            <div className="achievment">
                <div  className="circle" style={{color: darkMode?'var(--orange)':''}}>
                    2+
                </div>
                <span style={{color:darkMode ? 'white' :''}}>Years</span>
                <span>Experience</span>
            </div>
            <div className="achievment">
                <div className="circle" style={{color: darkMode?'white':''}}>
                    5+
                </div>
                <span style={{color:darkMode ? 'white' :''}}>Completed</span>
                <span>Project</span>
            </div>
            <div className="achievment">
                <div className="circle" style={{color: darkMode?'var(--orange)':''}}>
                    2+
                </div>
                <span style={{color:darkMode ? 'white' :''}}>Running</span>
                <span>Project</span>
            </div>
        </div>
    )
}

export default Experience;