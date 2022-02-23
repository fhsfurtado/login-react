import React from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";

import "./card.css";

function Card( props ){
    return(
        <div className={props.classe}>
            <h2>Login</h2>
            <div className="form-group">
                <Input
                    tipo={"text"}
                    ordem={"form-control"}
                />
            </div>
            <div className="form-group">
                <Input
                    tipo={"password"}
                    ordem={"form-control"}
                />
            </div>
            <Button
                classe={"button btn btn-primary"}
                texto={"Efetuar Login"}
                tipo={"submit"}
            />
        </div>
    );
}

export default Card;