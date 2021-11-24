import React from 'react'
import {useEffect, useState} from 'react'
import Nav from './Nav';




const Hotels = () => {
    const [city, setCity] = useState([])

    useEffect(() => {

        fetch (`https://trippy-konexio.herokuapp.com/api/hotels/city/paris`)
        .then(response => response.json())
        .then(data => setCity(data))
    }, [])

    console.log(city)

    return(

        <><h1>Hotels</h1>
        <Nav />
        {city.map(hotel =>
            <div key={hotel.name}>
            <img src="/img/hotels/229619_1.jpg" alt={hotel.name}/>
            <p>{hotel.name}</p>
            <p>{hotel.address}</p>
            <p>{hotel.phone}</p>
            <p>{hotel.stars}</p>
            <p>{hotel.city}</p>

            </div>

        
        )}
     </>
        
        
    )
}


export default Hotels