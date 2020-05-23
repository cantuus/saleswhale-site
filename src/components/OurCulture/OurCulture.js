import React from 'react'
import './OurCulture.css'
import CompanyValues from './CompanyValues'
import you from '../../images/you.png'


export default function OurProgress(props) {

    let cultureStore = [
        {
            header: "Building for the future",
            description: "We always challenge the status quo and work hard innovating on a product that not only works, but changes the game for our users."
        },
        {
            header: "Promoting trust & transparency",
            description: "We remain completely open, honest, and transparent with everyone. This has allowed us to build strong relationships with each other."
        },
        {
            header: "Achieving our very best",
            description: " We believe the success of the company lies within our employees and we constantly challenge each other to learn and level up. YOUSORO!!!"
        }
    ]

    return cultureStore.map(value => {

        return (<CompanyValues header={value.header} description={value.description} img={you} />);
    });
}