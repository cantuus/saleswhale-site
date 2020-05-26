import React from 'react';

export default function OfficeCard(props) {
    return (
        <div className={`office ${props.className}`}>
            <img src={props.img} alt="mail"></img>
            <h3>{props.location}</h3>
            <p>{props.address}</p>
            <p>{props.state} {props.zip}</p>
        </div>
    )
}