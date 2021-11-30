import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router'
import styled, { createGlobalStyle } from 'styled-components';

import Nav from '../components/Nav';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const GlobalStyle = createGlobalStyle`
    body {
        background-color: #011b4f;
    }

    h1 {
        text-align: center;
        font-size : 50px;
        color: white; 
    }

`
const Bedrooms = styled.div`
    color: white;
    flex-wrap: wrap;
    width: 90%;
    padding: 10px;
    margin: 20px auto;
    display: flex;
    justify-content: center;
`

const RoomInfos = styled.div`
    display: flex;
    flex-direction : column;
    padding: 0 10px;
    border : 1px solid black;
    text-align : center;
    margin : 20px 30px;
    box-shadow : 30px 30px 30px black;
`

const Bed = styled.img`
    height: 600px;
`

const Rooms = props => {

    const { id } = useParams()

    const [rooms, setRooms] = useState([])
    useEffect(() => {
        fetch(`https://trippy-konexio.herokuapp.com/api/hotels/${id}/rooms`)
            .then(res => res.json())
            .then(res => setRooms(res.results))
    }, [id])

    return (
        <>
            <GlobalStyle />
            <Nav />
            <h1> Chambres Disponibles </h1>
            <Bedrooms>
                {rooms.map(e => (
                    <RoomInfos>
                        <p>Nombre de personnes : {e.people}</p>
                        <p>prix de la nuit : {e.price} €</p>
                        {e.isBathroom ? <p> Bathroom </p> : <p>No Bathroom</p>}
                    </RoomInfos>
                ))}
            </Bedrooms>
            <Carousel>
                <div>
                    <Bed src="https://monparisjoli.com/wp-content/uploads/2016/02/56697034.jpg" />
                    <p className="legend">Chambre basique</p>
                </div>
                <div>
                    <Bed src="https://lh3.googleusercontent.com/proxy/OcjEEKJJhHtiZTWy0VnhhXxmGW3tvZGLcyg6S5Y8oyxL--0L0acMLJOliclmgIW0nzHm3uC94GMn6ipY3uKKuZ9KxxvLyt6maAewKkTxZ9NUHbKpBxCYUaAfkEo6KssoQ8vSxRt4XhxOgbJfKK89YS8L1O58XrVwC8vIfpkrr-5VJKxmyeZ-2zP1HaLAvxpV53zf8vEKcg" />
                    <p className="legend">chambre</p>
                </div>
                <div>
                    <Bed src="https://i.pinimg.com/736x/f3/7d/be/f37dbe026fd1f10cefe8642ae400633f.jpg" />
                    <p className="legend">Chambre</p>
                </div>
                <div>
                    <Bed src="https://www.nuitetspa.com/media-picture/77-1920-700-Grece-1.jpg" />
                    <p className="legend">Chambre</p>
                </div>
                <div>
                    <Bed src="https://www.maisonapart.com/images/normal/20150212_130325_5.-suite-blue-sunshine-3-idol-hotel-paris-8.jpg" />
                    <p className="legend">Chambre</p>
                </div>
                <div>
                    <Bed src="https://www.novaresa.net/img/firm/mediums/225-40658.jpg" />
                    <p className="legend">Chambre</p>
                </div>
                <div>
                    <Bed src="https://offloadmedia.feverup.com/parissecret.com/wp-content/uploads/2019/05/23144641/declic-hotel-galaxie.jpg" />
                    <p className="legend">Chambre</p>
                </div>
            </Carousel>
        </>
    );
};

export default Rooms;