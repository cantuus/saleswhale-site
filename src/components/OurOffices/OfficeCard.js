import React from 'react';

export default function OfficeCard(props) {
    return (
        <div className="outer-office-container">
            <div className="inner-office-container">
                <div className="office">
                    <img src={props.img} alt="mail"></img>
                    <h3>{props.location}</h3>
                    <p>{props.address}</p>
                </div>
            </div>
        </div>
    )
}