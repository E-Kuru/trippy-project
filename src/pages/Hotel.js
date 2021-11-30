import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Nav from '../components/Nav'
import { createGlobalStyle } from 'styled-components';
import { useParams } from 'react-router'
import { Carousel } from 'react-responsive-carousel'
import Stars from '../components/Stars';
import 'react-responsive-carousel/lib/styles/carousel.min.css'

import { FaCity } from 'react-icons/fa';
import Icon from '../components/Icon';



const GlobalStyle = createGlobalStyle`
    body {
        background-image: url("https://cdn.radiofrance.fr/s3/cruiser-production/2020/11/bcbd126f-f452-4e07-bb89-9d3b8b74db4b/600x337_bleu.jpg");
        background-repeat: no-repeat;
        background-size : 100% 100%;
        height: 100vh;
        background-attachment: fixed;
    }
`

const Row = styled.div`
    display: flex;
    flex-direction: row;
    @media(max-width : 780px){
        flex-direction : column;
    }

`

const Infos = styled.div`
    background-color: #011b4f;
    width : 30%;
    margin: 2% auto 0 auto ;
    display: flex;
    flex-direction: column;
    border: 1px white solid;
    box-shadow : 4px 2px 3px white;
    border-radius : 5%;
    color : white;

    @media(max-width : 780px){
        margin-bottom : 2%;
        width : 80%;
    }

`

const Informations = styled.div`
    padding-bottom : 20px;
    border-bottom : 1px solid white;
    width: 100%;
    height: 100%;
    text-align : center;
`

const H1 = styled.h1`
    color: white;
    text-align: center;

`

const Titles = styled.h3`
    margin: 10px 0;
    color: white;
`
const ImageContainer = styled.div`
    height: 100%;
    margin-top: 0;
    @media(max-width : 780px){
        margin-left: 0px;
    }

`

const HostelPicture = styled.img`
height : 500px;
width : 700px;
border-radius : 5%;
margin: 30px 0 0 40px;
`

const Comm = styled.div`
display: flex;
flex-direction:row;
flex-wrap: wrap;
align-items: center;
`

const UlContainer = styled.div`
    display: flex;
    flex-direction: column;
    flew-wrap: wrap;
    width: 100%;
    justify-content: center;

    div {
        display: flex;
        flex-direction : row;
        flex-wrap: wrap;
        justify-content: center;
        margin-right: 10px;
    }
    ul {
        padding-left: 20px;
    }
`

const IconAlign = styled.ul`
    padding: 5px;
    
`

const Hotel = props => {

    const [hotel, setHotel] = useState([])
    const { id } = useParams()

    useEffect(() => {
        fetch(`https://trippy-konexio.herokuapp.com/api/hotels/${id}`)
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
                    <HostelPicture src="https://www.orquebleue.fr/wp-content/uploads/2018/06/IMG_3479-1024x1024.jpg" alt="Hotel" />
                </ImageContainer> 
                <Infos>
                    <Informations>
                        <H1>{hotel.name}</H1>
                        <Titles>{hotel.address}</Titles>
                        <Titles>{hotel.country} </Titles>
                        <Titles>{hotel.phone}</Titles>
                        <Titles>{hotel.price}€</Titles>
                        <Titles><Stars hotel={hotel} /></Titles>
                    </Informations>
                    <H1> Commodities</H1>
                    <UlContainer>
                        <div>
                            {hotel.commodities.filter(function (ele, pos) {
                                return hotel.commodities.indexOf(ele) === pos;
                            }).map(e => (
                                <Comm>
                                    <IconAlign>
                                        <Icon comodity={e}></Icon>
                                    </IconAlign>
                                    <div>
                                        <p>{e}</p>
                                    </div>
                                </Comm>
                            ))}
                        </div>
                    </UlContainer>
                </Infos>
            </Row>
        </>
    );
};


export default Hotel;
