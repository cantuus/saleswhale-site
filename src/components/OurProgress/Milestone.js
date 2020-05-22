import React from 'react';

export default function Milestone(props) {

    return (
        <div className="milestone">
            <h3>{props.year}</h3>
            <img src={props.img} alt="mail"></img>
            <p>{props.description}</p>
        </div>
    )
}