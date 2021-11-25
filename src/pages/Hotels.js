import {useEffect, useState} from 'react'
import { useParams } from 'react-router'
import styled from 'styled-components';

import Nav from '../components/Nav'
import CityMap from '../components/CityMap'
import Markers from '../components/Markers'

import london from '../assets/london.png'
import paris from '../assets/paris.png'
import nice from '../assets/nice.png'
import rome from '../assets/rome.png'
import newYork from '../assets/new-york.png'


const Hotels = () => {
    
    const {city} = useParams()

    const HeadDiv = styled.div `
    height : 88vh;
    background : url('
    ${city === 'london' && london}
    ${city === 'paris' && paris}
    ${city === 'rome' && rome}
    ${city === 'new-york' && newYork}
    ${city === 'nice' && nice}') no-repeat center/cover;
    background-attachment: fixed;
    color : white;

    display : flex;

    justify-content : flex-end;    

    text-align : center;

    span {
        font-size : 50px;
        font-weight : bolder;
    }
    
    h2{
        margin : 2% 8% 0 0;
        font-size : 40px; 
        font-weight : lighter  
    }
`  

    const H1 = styled.h1 `
        text-align : center;
    `

    const AllCards = styled.div`
        // border : 4px solid black;
        display : flex;
        flex-wrap : wrap;
        justify-content : space-around;
    `

    const Card = styled.div`
    
      border-radius: 3px;
      font-weight: bold;
      margin-bottom: 1%;
      text-align: center;
      width: 40%;
      height: 280px;
      border: 1px solid #c3c3c3;
      `

      const Title = styled.div`
      color: black;
      `
      const Img = styled.img`
      height: 20%;
      background-color: black;
      `

      const MapContainer = styled.div`
        margin-bottom : 2%;
        height : 90vh;
        display : flex;
        justify-content : center;
        align-items : center;
      `

    const [hotels, sethotels] = useState([])

    useEffect( () => {
        fetch (`https://trippy-konexio.herokuapp.com/api/hotels/city/${city}?page=1`)
        .then(res => res.json())
        .then(res => sethotels(res))
    },[])

    console.log(hotels);

    if (!hotels.center) {
        return <p>Chargement...</p>
    }

    return(
        <>
            <Nav/>
            <HeadDiv>
                    <h2>
                        <span>
                            {city === 'london' && 'London'}
                            {city === 'new-york' && 'New-York'}
                            {city === 'paris' && 'Paris'}
                            {city === 'nice' && 'Nice'}
                            {city === 'rome' && 'Rome'}
                        </span>
                    </h2>
            </HeadDiv>


            <H1> Hotels List</H1>
                <AllCards>
                    {hotels.results.map(hotel =>
                        <Card key={hotel.name}>
                            <Title><h3>{hotel.name}</h3>
                            <div><p>{hotel.stars} ★</p></div>
                            <div>{hotel.images}</div>
                            <div><Img key={hotel.pictures}/> </div>
                            <div><p>{hotel.address}</p></div>
                            <div><p>{hotel.phone}</p></div>
                            <div><p>{hotel.price}€</p></div> 
                            </Title>   
                        </Card>
                    )}
                </AllCards>

            <MapContainer>
                <CityMap center={hotels.center}>
                    {hotels.results.map( e => (
                        <Markers 
                        key={e.name + e.location}
                        color='#094BBC'
                        lat={e.location.lat}
                        lng={e.location.lon}
                        price={e.price}
                        />
                    ))}
                </CityMap>
            </MapContainer>

        </>
        
    );
    
};


export default Hotels