import React from "react";
import "./Card.css";

const Card = props => (

    <div className="card" onClick={() => props.handleClick(props.id)}>
        <img className="img-container" alt={props.name} src={props.image}/>
    </div>
);

export default Card;