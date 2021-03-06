import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Nav from '../components/Nav'
import { createGlobalStyle } from 'styled-components';
import { useParams } from 'react-router'
import Stars from '../components/Stars';

import CityMap from '../components/CityMap'
import Markers from '../components/Markers'

import Icon from '../components/Icon';
import { Link } from 'react-router-dom';

const GlobalStyle = createGlobalStyle`
    
    button {
        padding: 5px 10px;
        border-radius : 10px;
        width: 25%;
        background-color: white;
        border: none;
        margin-top: 20px;
        font-size: 20px;
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

    @media(max-width : 780px){
        flex-direction : column;
    }

    @media(max-width : 1024px){
        flex-direction : column;
    }

`

const Infos = styled.div`
    background-color: #ffff;
    width : 30%;
    margin: 2% auto 2% auto ;
    display: flex;
    flex-direction: column;
    border: 2px #0E3D71 solid;
    box-shadow : 4px 4px 3px #0E3D71;
    border-radius : 5%;
    color : #011b4f;

    @media(max-width : 780px){
        margin-bottom : 2%;
        width : 80%;
    }

    @media(max-width : 1024px){
        margin : 2% 2% 0 9%;
        width : 80%;
    }
`

const Informations = styled.div`
    padding-bottom : 20px;
    border-bottom : 1px solid #0E3D71;
    width: 100%;
    height: 100%;
    text-align : center;
`

const H1 = styled.h1`
    color : #011b4f;
    text-align: center;

`

const Titles = styled.h3`
    margin: 10px 0;
    color : #011b4f;
`
const ImageContainer = styled.div`
    display: flex;
    flex-direction : column;
    align-items : center;
    height: 100%;
    margin-top: 0;
    @media(max-width : 780px){
        margin-left: 0px;
    }

    button{
        margin-bottom : 2%;
        height : 40px;
        background-color : #011b4f;
        a{
            color : white;  
        }
        a:hover{
            color : #FEAD33;
        }
    }

`

const HostelPicture = styled.img`
    height : 610px;
    border-radius : 5%;
    margin: 30px 0 0 40px;

    @media(max-width : 430px){
        margin : 30px 0px 0 20px;
        width 340px;
    }

    @media(min-width : 1024px){
        width : 900px;
    }
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

const MapContainer = styled.div`
    margin-bottom : 2%;
    height : 90vh;
    display : flex;
    justify-content : center;
    align-items : center;
`


const Hotel = () => {

    const [hotel, setHotel] = useState([])
    const { id } = useParams()

    useEffect(() => {
        fetch(`https://trippy-konexio.herokuapp.com/api/hotels/${id}`)
            .then(res => res.json())
            .then(res => setHotel(res.result))
    }, [id])

    console.log(hotel);

    if (!hotel.commodities) {
        return <h1>Chargement</h1>
    }

    console.log(hotel);

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
                        <Titles>{hotel.price}???</Titles>
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
            <MapContainer>
            <CityMap center={hotel}>
                    <Markers 
                    key={hotel.name + hotel.location}
                    color='#094BBC'
                    lat={hotel.location.lat}
                    lng={hotel.location.lon}
                    price={hotel.price}
                    />
            </CityMap>
        </MapContainer>

        </>
    );
};


export default Hotel;
