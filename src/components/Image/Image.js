import React from "react";

import "./image.css";

function Image(props){
    return(
        <img src="%PUBLIC_URL%/{{props.caminho}}"/>
    );
}

export default Image;