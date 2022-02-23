import React from "react";

import "./input.css";

function Input (props){
    return(
        <div>
            <input type={props.tipo} className={props.ordem}/>
        </div>
    )
}

export default Input;