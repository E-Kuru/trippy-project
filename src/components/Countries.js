import {useEffect, useState} from 'react'



const Countries = () => {
    const [city, setCity] = useState(null)
    // const {isLogged}= useContext()

    useEffect(() => {
        getCountries()
    }, [])

    
    const getCountries = id => {
        fetch (`https://trippy-konexio.herokuapp.com/api/home/`)
        .then(response => response.json())
        .then(data => setCity(data))
    }
    console.log(city)
    return(
        <p>hello3</p>
    )
}


export default Countries