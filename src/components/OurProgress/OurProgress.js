import React from 'react'
import Milestone from './Milestone'
import mail from '../../images/mail.png'

export default function OurProgress(props) {

    let progressStore = [
        {
            year: 2015,
            description: "Founded in Singapore by Gabriel Lim, Ethan Le, and Venus Wong"
        },
        {
            year: 2016,
            description: "Accepted into Y Combinator (S16) and moved to San Francisco"
        },
        {
            year: 2017,
            description: "Raised US$1.2M in seed funding and hired core engineers"
        },
        {
            year: 2019,
            description: "Raised US$5.3M in Series A and expanded team size"
        },
        {
            year: 2020,
            description: "Opened US office in Washington, DC and hired US sales team"
        }
    ]

    return progressStore.map(milestone => {

        return (<Milestone year={milestone.year} description={milestone.description} img={mail} />);
    });
}