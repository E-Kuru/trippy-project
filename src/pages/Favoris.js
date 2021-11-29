import Nav from "../components/Nav"
import styled from 'styled-components';
import { useEffect, useState } from 'react'


const HeadFav = styled.div `
    text-align : center;
    h1{
        font-size : 45px;
    }
`

function Favoris() {

    const [Favs, setFavs] = useState([])

    const [AllFavs, setAllfavs] = useState(JSON.parse(localStorage.getItem('Favs')))

    // useEffect( () => {

    //     AllFavs.forEach( e => {
    //     GetHotel(e)
    //     }) 
    // },[])

    const GetHotel = id => {
        fetch(`https://trippy-konexio.herokuapp.com/api/hotels/${id}`)
        .then(res => res.json())
        .then( res => setFavs([...Favs,res.result]))
    }
    
    if(!AllFavs){
        return (
            <>
            <Nav/>
            <h1>There's No fav my dude</h1>
            </>
        )
    }

    return (
        <>
        <Nav/>
        <HeadFav>
            <h1>Hi, there is all ur favs !! ;)</h1>
        </HeadFav>

        {Favs.map(e => (
            <div>
                <h1>{e.name}</h1>
            </div>
        ))}

        </>
    )
}

export default Favoris
