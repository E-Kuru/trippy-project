import {useEffect, useState} from 'react'
import { useParams } from 'react-router'

import Nav from '../components/Nav'


const Hotels = () => {

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
        <p>{city}</p>
        </>
    )
}


export default Hotels