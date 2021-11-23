import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Nav from './Nav';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
        background-color: darkblue;
    }
`

const Row = styled.div`
    display: flex;
    flex-direction: row; 
    justify-content: space-between
`

const Justified = styled.div`
    display: flex; 
    flex-direction : column;
    padding-right: 40px;
`

const Titles = styled.h3`
    margin: 3px 0
`

const HostelPicture = styled.img`
height : 300px;
width : 300px;
`
const Hotel = props => {

    const [hotel, setHotel] = useState([])

    useEffect(() => {
        fetch("https://trippy-konexio.herokuapp.com/api/hotels/")
            .then(res => res.json())
            .then(res => setHotel(res.results))
    }, [])

    console.log(hotel.map(e => e));
    return (
        <>
            <GlobalStyle />
            <Nav />
            <Row>
                <Justified>
                    <HostelPicture src="https://www.parisinfo.com/var/otcp/sites/images/media/1.-photos/03.-hebergement-630-x-405/hotel-enseigne-neon-630x405-c-thinkstock/31513-1-fre-FR/Hotel-enseigne-neon-630x405-C-Thinkstock.jpg" alt="Hotel" />
                    <h1>Hôtel (name)</h1>
                    <Titles>Adresse de L'Hôtel (address) + Cité (city)</Titles>
                    <Titles>Pays (country) </Titles>
                    <Titles>Téléphone (phone)</Titles>
                    <Titles>Prix de l'hôtel (price) + Nombre d'étoiles (stars)</Titles>
                </Justified>
                <div>
                    <p> Commoditées (commodities) </p>
                    <p>"swimming pool",
                        "restaurant",
                        "gym",
                        "room service",
                        "wifi",
                        "bar",
                        "spa",
                        "disabled access",
                        "family",
                        "wifi",
                        "conciergerie",
                        "non smoking",
                        "shuttle",
                        "dry cleaning",
                        "multilingual staff",
                        "breakfast included",
                        "swimming pool",
                        "swimming pool",
                        "swimming pool",
                        "meeting rooms",
                        "meeting rooms",
                        "meeting rooms",
                        "dry cleaning",
                        "wifi",
                        "air conditioning",
                        "minibar",
                        "minibar",
                        "disabled access",
                        "family",
                        "non smoking",
                        "suites"
                    </p>
                </div>
            </Row>
        </>
    );
};


export default Hotel;