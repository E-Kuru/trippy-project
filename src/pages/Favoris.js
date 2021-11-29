import Nav from "../components/Nav"
import styled from 'styled-components';
import { useEffect, useState } from 'react'

import london from '../assets/london.png'

const HeadFav = styled.div `
    text-align : center;
    h1{
        margin : 1% 0;
        font-style : italic;
        font-size : 45px;
    }

    button{
        color : white;
        background-color : #000000;
        border-radius : 50px;
        width : 25%;
        height : 48px;
        margin-bottom : 2%;
        font-weight : bolder;
    }

`

const AllCards = styled.div`
    direction : rtl;
    border-bottom : 1px solid black;
    border-top : 1px solid black;
    display : flex;
    flex-wrap : wrap;
    justify-content : space-around;
    background-color : #0E3D71;
    a{
        text-decoration : none;
    }
`
const Card = styled.div`
    
    background-color : #ffff;

    border-radius: 3px;
    font-weight: bold;
    margin: 2% 0;
    text-align: center;
    width: 40%;
    height: 420px;
    img{
        width : 80%;
        height : 210px;
    }
  `

function Favoris() {

    const [Favs, setFavs] = useState([])

    const [AllFavs, setAllfavs] = useState(JSON.parse(localStorage.getItem('Favs')))

    useEffect( () => {

        // Initiation des fetch 

        const newFavs = AllFavs.map(id => {
            return fetch(`https://trippy-konexio.herokuapp.com/api/hotels/${id}`)
        })
        
        // Promesse qui retourne tous les objects sous format Json 

        Promise.all(newFavs).then(
           response => Promise.all(response.map (res => res.json()))
        )

        // Stockage des nouveaux objets 
        .then(res => {
            const Data = res.map( e => e.result)
            setFavs(Data)
        })

    },[])

    const handleDeleteFav = id =>{
        localStorage.removeItem('Favs')
        // const cloneArray = Favs.filter(e => e._id != id)
        // console.log(Favs.map(e => e._id))
        // setFavs(cloneArray)
        // console.log(Fav);
    }

    return (
        <>
        <Nav/>
        <HeadFav>
            <h1>Hi, there is all ur favs !! ;)</h1>
        <button onClick={() => handleDeleteFav()}>Delete Storage</button>
        </HeadFav>

        <AllCards>
        {Favs.map(e => (
            <Card>
                <div><h3>{e.name}</h3>
                <p>{e.stars} ★</p>
                <img src={london} alt="img" />
                <p>{e.address}</p>
                <p>{e.price}€</p> 
                </div>   
            </Card>
        ))}
        </AllCards>

        </>
    )
}

export default Favoris
