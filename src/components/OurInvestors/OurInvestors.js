import React from 'react'
import InvestorCard from './InvestorCard'
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

    return investorStore.map(investor => {

        return (<InvestorCard img={investor.investor} />);
    });
}