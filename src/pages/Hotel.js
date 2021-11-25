import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Nav from '../components/Nav'
import { createGlobalStyle } from 'styled-components';
import { useParams } from 'react-router'
import { Carousel } from 'react-responsive-carousel'

import london from '../assets/london.png'
import paris from '../assets/paris.png'
import nice from '../assets/nice.png'
import rome from '../assets/rome.png'
import newYork from '../assets/new-york.png'

import 'react-responsive-carousel/lib/styles/carousel.min.css'
import CityMap from '../components/CityMap';
import { FaCity } from 'react-icons/fa';
import HomePage from './HomePage';

const GlobalStyle = createGlobalStyle`
    body {
        background-image: url("https://cdn.radiofrance.fr/s3/cruiser-production/2020/11/bcbd126f-f452-4e07-bb89-9d3b8b74db4b/600x337_bleu.jpg");
        background-repeat: no-repeat;
        background-size : 100% 100%;
        height: 100%;
    }
`

const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

`

const Infos = styled.div`
    width : 30%;
    margin: 2% auto 0 auto ;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px black solid;
    box-shadow : 4px 2px 10px black;
    border-radius : 5%;
    color : black;
    ul{
        height : 300px;
        display : flex;
        justify-content : space-around;
        flex-wrap : wrap;
        li{
            width : 33%;
            margin-right : 2%;
        }
    }
`

const Informations = styled.div`
    padding-bottom : 20px;
    border-bottom : 1px solid black;
    width: 100%;
    height: 100%;
    text-align : center;
`

const H1 = styled.h1`
    color: black;
`

const Titles = styled.h3`
    margin: 10px 0;
    color: black;
`
const ImageContainer = styled.div`
    margin-left: 30px;
    margin-top: 20px;
`

const HostelPicture = styled.img`
height : 500px;
width : 700px;
border-radius : 5%;
`
const Hotel = props => {

    const [hotel, setHotel] = useState([])

    // const { id } = useParams()

    useEffect(() => {
        fetch(`https://trippy-konexio.herokuapp.com/api/hotels/619b99fc53a95d1d32bf1539`)
            .then(res => res.json())
            .then(res => setHotel(res.result))
    }, [])

    console.log(hotel);

    if (!hotel.commodities) {
        return <h1>Chargement</h1>
    }

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
                        <H1>{hotel.name}</H1>
                        <Titles>{hotel.address}</Titles>
                        <Titles>{hotel.country} </Titles>
                        <Titles>{hotel.phone}</Titles>
                        <Titles>{hotel.price}€ / {hotel.stars}*</Titles>
                    </Informations>
                    <H1> Commodities</H1>
                    <ul>
                        {hotel.commodities.map(e => (
                            <li>{e}</li>
                        ))}
                    </ul>
                    {/* {hotel.map(e => {
                        <Carousel>
                            <div>{e.}</div>
                        </Carousel>
                    })} */}
                </Infos>
            </Row>
        </>
    );
};


export default Hotel;