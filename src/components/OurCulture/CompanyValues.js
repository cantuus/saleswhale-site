import React from 'react';

export default function CompanyValues(props) {
    return (
        <div className="values">
            <img src={props.img} alt="mail"></img>
            <h3>{props.header}</h3>
            <p>{props.description}</p>
        </div>
    )
}