import React from 'react';

export default function InvestorCard(props) {
    return (
        <div className={`investor-card ${props.className}`}>
            <img src={props.img} alt="investor-logo" ></img>
        </div>
    )
}