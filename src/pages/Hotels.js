import {useEffect, useState} from 'react'
import { useParams } from 'react-router'
import styled from 'styled-components';

import Nav from '../components/Nav'
import CityMap from '../components/CityMap'
import Markers from '../components/Markers'


const Hotels = () => {
   
    const Card = styled.div`
    
      font-size: 1em;
      border-radius: 3px;
      color: black ;
      font-weight: bold;
      margin: 20px;
      margin-bottom: 15px;
      padding: 15px;
      text-align: center;
      width: 300px;
      height: 550px;
      border: 1px solid #c3c3c3;
      float: left;
      `
      const Title = styled.div`
      color: black;
      `
      const Img = styled.img`
      height: 250px;
      background-color: black;
      `


    const [cities, setCities] = useState([])

    const {city} = useParams()



    useEffect( () => {
        fetch (`https://trippy-konexio.herokuapp.com/api/hotels/city/${city}`)
        .then(res => res.json())
        .then(res => setCities(res))
    },[])

    console.log(cities);

    if (!cities.center) {
        return <p>Chargement...</p>
    }

    console.log(cities);

    return(
        <>
            <Nav/>

            <h1> Hotels List</h1>

            <div style={{ display: "flex"}}>
                <div style={{width : "50%"}}>
                    {cities.results.map(hotel =>
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
                </div>
                <CityMap center={cities.center}>
                    {cities.results.map( e => (
                        <Markers 
                        key={e.name + e.location}
                        color='#094BBC'
                        lat={e.location.lat}
                        lng={e.location.lon}
                        price={e.price}
                        />
                    ))}
                </CityMap>
                
            </div>
        </>
        
    );
    
};


export default Hotels