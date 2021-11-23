import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import HomePage from './HomePage'


const Hotel = props => {
    const [hotel, setHotel] = useState()
    useEffect(() => {
        fetch("https://trippy-konexio.herokuapp.com/api/hotels/")
            .then(res => res.json())
            .then(res => setHotel(res))
    }, [])
    return (
        <>
            <HomePage />
            <div>
                <h1>Hôtel {props.name}</h1>
            </div>
            <div>
                {hotel.map()}
            </div>
            <div>
                <img src="https://www.parisinfo.com/var/otcp/sites/images/media/1.-photos/03.-hebergement-630-x-405/hotel-enseigne-neon-630x405-c-thinkstock/31513-1-fre-FR/Hotel-enseigne-neon-630x405-C-Thinkstock.jpg" alt="Hotel" />
            </div>
        </>
    );
};

export default Hotel;