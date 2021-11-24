import {useEffect, useState} from 'react'
import { useParams } from 'react-router'
import styled from 'styled-components';

import Nav from '../components/Nav'


const Hotels = () => {
    
    const Card = styled.div`
    font-size: 1em;
      border-radius: 3px;
      color: black ;
      margin: 10px;
      margin-bottom: 15px;
      padding: 15px;
      text-align: center;
      width: 300px;
      height: 550px;
      border: 1px solid #c3c3c3;
      `

    const [cities, setCities] = useState([])

    const {city} = useParams()

    useEffect(() =>{
        fetch (`https://trippy-konexio.herokuapp.com/api/hotels/city/${city}`)
        .then(res => res.json())
        .then(res => setCities(res))
    },[])

    console.log(cities.results);

    return(

        
        <>
        <Nav/>
        <h1>Hotels List</h1>
        {cities.map(hotel =>
           
        <Card key={hotel.name}>

            {/* <img src={hotel.pictures}/> */}
            <h3>{hotel.name}</h3>
            
            <p>{hotel.stars} ★</p>
            <Img src={'https://www.lippi.fr/wp-content/uploads/2017/11/NoirCarbone.jpg'}/>
            <p>{hotel.address}</p>
            <p>{hotel.phone}</p>
            <p>{hotel.city}</p>
            <p>{hotel.price} €</p>
            
 
       
        </Card>
            )}
            

        <p>{city}</p>
        </>
        
    );
    
};


export default Hotels