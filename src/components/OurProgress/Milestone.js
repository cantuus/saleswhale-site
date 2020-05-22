import React from 'react';

export default function Milestone(props) {

    return (
        <div className="milestone">
            <div className="milestone-year">
                <h3>{props.year}</h3>
            </div>
            <div className="milestone-mail">
                <img src={props.img} alt="mail"></img>
            </div>
            <div className="milestone-description">
                <p>{props.description}</p>
            </div>
        </div>
    )
}