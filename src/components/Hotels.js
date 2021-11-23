import {useEffect, useState} from 'react'
import styled from 'styled-components';
import { Link } from "react-router-dom";



const Hotels = () => {
    const [city, setCity] = useState(null)
    // const {isLogged}= useContext()

    useEffect(() => {
        getHotels()
    }, [])

    
    const getHotels = id => {
        fetch (`https://trippy-konexio.herokuapp.com/api/hotels/city/paris`)
        .then(response => response.json())
        .then(data => setCity(data))
    }
    console.log(city)

    return(

        <Link to="/Hotels">Hotel </Link>
        
    )
}


export default Hotels