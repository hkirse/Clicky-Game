import React from "react";
import "./DinoCard.css";

const DinoCard = props => (
    <div
        className = "card"
        value = {props.id}
        onClick={() => props.imageClick(props.id)}
    >

        <div className = "img-container">
            <img alt = {props.name} src = {props.image} />
        </div>
    </div>

);

export default DinoCard;