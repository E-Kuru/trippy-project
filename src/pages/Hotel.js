import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Nav from '../components/Nav'
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
        background-color: darkgray; 
    }
`

const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

`

const Infos = styled.div`
    width : 30%;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px white solid;
    box-shadow : 2px 2px 10px white;
`

const Informations = styled.div `
    padding-bottom : 20px;
    border-bottom : 1px solid white;
`

const H1 = styled.h1`
    color: white;
`

const Titles = styled.h3`
    margin: 10px 0;
    color: white;
`

const Paragraph = styled.p`
    color: white;
    width: 100%;
    text-align: center;
`

const ImageContainer = styled.div`
    margin-left: 30px;
    margin-top: 20px;
`

const HostelPicture = styled.img`
height : 600px;
width : 700px;
border-radius : 5%;
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
                <ImageContainer>
                    <HostelPicture src="https://www.parisinfo.com/var/otcp/sites/images/media/1.-photos/03.-hebergement-630-x-405/hotel-enseigne-neon-630x405-c-thinkstock/31513-1-fre-FR/Hotel-enseigne-neon-630x405-C-Thinkstock.jpg" alt="Hotel" />
                </ImageContainer>
                <Infos>
                    <Informations>
                        <H1>Hôtel (name)</H1>
                        <Titles>Adresse de L'Hôtel (address) + Cité (city)</Titles>
                        <Titles>Pays (country) </Titles>
                        <Titles>Téléphone (phone)</Titles>
                        <Titles>Prix de l'hôtel (price) + Nombre d'étoiles (stars)</Titles>
                    </Informations>
                    <H1> Commoditées (commodities) </H1>
                    <Paragraph>"swimming pool",
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
                    </Paragraph>
                </Infos>
            </Row>
        </>
    );
};


export default Hotel;