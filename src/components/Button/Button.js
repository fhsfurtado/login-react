import React from "react";

import "./button.css";

function Button(props){
    return(
        <button type={props.tipo} className={props.classe}>{props.texto}</button>
    );
}

export default Button;