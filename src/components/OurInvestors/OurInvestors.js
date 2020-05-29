import React from 'react'
import InvestorCard from './InvestorCard'
import './OurInvestors.scss'
import combinator from '../../images/investor 1.png'
import monkHill from '../../images/investor 2.png'
import strive from '../../images/investor 3.png'
import wave from '../../images/investor 4.png'


export default function OurInvestors(props) {

    let investorStore = [
        {
            investor: combinator,
        },
        {
            investor: monkHill
        },
        {
            investor: strive
        },
        {
            investor: wave
        }

    ]

    return investorStore.map((investor, index) => {
        if (index % 2 === 0) // if even, this is the left column
        {
            return (<InvestorCard key={index} img={investor.investor} className="left-column" />);
        } else {
            return (<InvestorCard key={index} img={investor.investor} className="right-column" />);
        }
    });
}