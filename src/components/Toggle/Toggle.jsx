import React from "react";
import './Toggle.css';
import Sun from '@iconscout/react-unicons/icons/uil-sun';
import Moon from '@iconscout/react-unicons/icons/uil-moon';
import { themeContext } from "../../context";
import { useContext } from "react";

function Toggle() {

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const handleClick = () => {
        // debugger
        theme.dispatch({ type: "toggle" });
    };
    return (
        <div className="toogle"  onClick={handleClick}>
            <Sun />
            <Moon />

            <div
                className="t-button"
                style={darkMode ? { left: "2px" } : { right: "2px" }}
            >

            </div>


        </div>
    )
}

export default Toggle;