import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import styled from 'styled-components';
import Hotel from "./Hotel"

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
        margin-bottom : 2%; 
        text-align : center;
    `

    const AllCards = styled.div`
        direction : rtl;
        border-bottom : 1px solid black;
        border-top : 1px solid black;
        height : 80vh;
        overflow : scroll;
        display : flex;
        flex-wrap : wrap;
        justify-content : space-around;
        background-color : #0E3D71;
        ::-webkit-scrollbar {
            direction:ltr;
            height: 4px;
            width: 20px;
          }
        ::-webkit-scrollbar-thumb:vertical{
            background: #ffff;
            border-radius: 10px;
        }
    `

    const Card = styled.div`
    
    background-color : #ffff;
    
      border-radius: 3px;
      font-weight: bold;
      margin: 2% 0;
      text-align: center;
      width: 40%;
      height: 400px;
      img{
          width : 80%;
          height : 210px;
      }
      `

      const Title = styled.div`
      color: black;
      `
      const MapContainer = styled.div`
        margin-bottom : 2%;
        height : 90vh;
        display : flex;
        justify-content : center;
        align-items : center;
      `
      const ButtonGroup = styled.div`
      display: flex;
      justify-content: center;

      button{
        background-color: #0d3d70;
        color: white;
        font-size: 20px;
        padding: 10px 20px;
        border-radius: 3px;
        margin: 10px;
        cursor: pointer;
        margin-right: 5px;  
      }
    
    `

    // this.handleFetchClick = thishandleFetchClick.bind(this);

    const [hotels, setHotels] = useState([])

    useEffect( () => {
        fetch (`https://trippy-konexio.herokuapp.com/api/hotels/city/${city}?page=3`)
        .then(res => res.json())
        .then(res => setHotels(res))
    },[])

    console.log(hotels);

    const handleFetchClick = (page) => {
        fetch (`https://trippy-konexio.herokuapp.com/api/hotels/city/${city}?page=${page}`)
        .then(res => res.json())
        .then(res => setHotels(res))
    }

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
                            <p>{hotel.stars} ★</p>
                             <img src={london} alt="img" />
                            <p>{hotel.address}</p>
                            <p>{hotel.price}€</p> 
                            </Title>   
                        </Card>
                    )}
                </AllCards>
                
                
            <ButtonGroup>
                    <button onClick={() => handleFetchClick(1)}>1</button>
                    <button onClick={() => handleFetchClick(2)}>2</button>
                    <button onClick={() => handleFetchClick(3)}>3</button>
                    <button onClick={() => handleFetchClick(4)}>4</button>
            </ButtonGroup>
                    

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