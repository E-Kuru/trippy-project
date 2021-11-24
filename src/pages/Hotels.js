import {useEffect, useState} from 'react'
import { useParams } from 'react-router'

import Nav from '../components/Nav'
import CityMap from '../components/CityMap'
import Markers from '../components/Markers'


const Hotels = () => {

    const [myPosition, setMyPosition] = useState(null)

    const [cities, setCities] = useState([])

    const {city} = useParams()

    useEffect(() =>{
        fetch (`https://trippy-konexio.herokuapp.com/api/hotels/city/${city}`)
        .then(res => res.json())
        .then(res => setCities(res))
    },[])

    if (!cities.center) {
        return <p>Chargement...</p>
    }

    console.log(cities);

    return(
        <>
        <Nav/>
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
    )
}


export default Hotels