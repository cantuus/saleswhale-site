import React from 'react'
import OfficeCard from './OfficeCard'
import sinon from '../../images/sinon.png'
import './OurOffices.css'


export default function OurOffices(props) {

    let officeStore = [
        {
            location: "Singapore",
            address: "155B Telok Ayer Street",
            state: "Singapore",
            zip: "068611"
        },
        {
            location: "Washington DC",
            address: "1701 Rhode Island Ave NW",
            state: "Washington, DC",
            zip: "20036"
        }
    ]

    return officeStore.map((office, index) => {

        if (index % 2 === 0) {
            return (<OfficeCard location={office.location}
                address={office.address}
                state={office.state}
                zip={office.zip}
                img={sinon}
                className="left-column" />)
        }
        else {
            return (<OfficeCard location={office.location}
                address={office.address}
                state={office.state}
                zip={office.zip}
                img={sinon}
                className="right-column" />)
        }
    });
}