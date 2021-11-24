import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import styled from 'styled-components';
import Hotel from "./Hotel"

import Nav from '../components/Nav'
import CityMap from '../components/CityMap'
import Markers from '../components/Markers'


const Hotels = () => {
    
    const Card = styled.div`
    
    font-size: 1em;
      border-radius: 3px;
      color: black ;
      font-weight: bold;
      margin: 10px;
      margin-bottom: 15px;
      padding: 15px;
      text-align: center;
      width: 300px;
      height: 550px;
      border: 1px solid #c3c3c3;
      
      `
      const Img = styled.img`
      height: 250px;
      `
    const [cities, setCities] = useState([])

    const { city } = useParams()

    useEffect( () => {
        fetch (`https://trippy-konexio.herokuapp.com/api/hotels/city/${city}`)
        .then(res => res.json())
        .then(res => setCities(res))
    },[])

    console.log(cities);

    if (!cities.center) {
        return <p>Chargement...</p>
    }

    return(
        <>
        
        <Nav/>
        <h1> Hotels List</h1>
        
        {cities.results.map(hotel =>
           
            <Card key={hotel.name}>
                <div className="title">
                <h3>{hotel.name}</h3>
                </div>
                
                <p>{hotel.stars} ★</p>
                <Img src={'https://www.lippi.fr/wp-content/uploads/2017/11/NoirCarbone.jpg'}/>
                <p>{hotel.address}</p>
                <p>{hotel.phone}</p>
                <p>{hotel.city}</p>
                <p>{hotel.price}€</p>
            </Card>
        )}
        <CityMap 
        center={cities.center}
        >
        
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
        <p>{city}</p>

        </>
        
    );
    
};


export default Hotels