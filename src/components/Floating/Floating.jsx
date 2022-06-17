import React from "react";

import './Floating.css'



function Floating({image, text1, text2}) {
  return (
    // darkMode
    <div className="floating">
      <img src={image} alt="" />
      <span>
        {text1}
        <br/>
        {text2}
      </span>
    </div>
  );
};

export default Floating;