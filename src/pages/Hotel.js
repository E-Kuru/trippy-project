import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Nav from '../components/Nav'
import { createGlobalStyle } from 'styled-components';
import { useParams } from 'react-router'
import Stars from '../components/Stars';


import Icon from '../components/Icon';
import { Link } from 'react-router-dom';

const GlobalStyle = createGlobalStyle`
    body {
        background-color: #011b4f;
    }
    
    button {
        padding: 5px 10px;
        border-radius : 10px;
        width: 25%;
        background-color: white;
        border: none;
        margin-top: 20px;
        font-size: 20px;
    }

    button:hover {
        background-color: black;
    }

    a {
        text-decoration : none;
        color: black;
    }

    a:hover {
        color: white;
    }
`

const Row = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 20px;
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
    display: flex;
    flex-direction : column;
    height: 100%;
    margin-left: 30px;
    margin-top: 0;
    align-items: center;
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
                    <button><Link to={`/rooms/${id}`}> Voir les chambres</Link></button>
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
