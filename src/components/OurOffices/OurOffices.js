import React from 'react'
import OfficeCard from './OfficeCard'
import sinon from '../../images/sinon.png'


export default function OurOffices(props) {

    let officeStore = [
        {
            location: "Singapore",
            address: "155B Telok Ayer Street Singapore, 068611"
        },
        {
            location: "Washington DC",
            address: "1701 Rhode Island Ave NW Washington, DC 20036"
        }
    ]

    return officeStore.map(office => {

        return (<OfficeCard location={office.location} address={office.address} img={sinon} />);
    });
}