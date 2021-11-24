import {useEffect, useState} from 'react'
import { useParams } from 'react-router'

import Nav from '../components/Nav'


const Hotels = () => {
    const [cities, setCities] = useState(null)
    // const {isLogged}= useContext()

    // useEffect(() => {
    //     getHotels()
    // }, [])

    const {city} = useParams()

    console.log(city);

    const getHotels = id => {
        fetch (`https://trippy-konexio.herokuapp.com/api/home/`)
        .then(response => response.json())
        .then(data => setCities(data))
    }
    return(
        <>
        <Nav/>
        <p>hello3</p>
        </>
    )
}


export default Hotels