import styled from 'styled-components'
import { Link } from "react-router-dom"
import React, { useEffect, useState } from 'react';

import Nav from '../components/Nav'

import headParallax from '../assets/head-parallax.png'

const HeadSection = styled.div`
    *{
        margin : 0;
        padding : 0;
        box-sizing : border-box;
    }
`

const HeadDiv = styled.div `

    height : 88vh;
    background : url('${headParallax}') no-repeat center/cover;
    background-attachment: fixed;
    color : white;

    display : flex;

    justify-content : flex-end;    

    text-align : center;

    span {
        font-weight : bolder;
        font-weight : bolder;
        font-size: 3.5em;
        text-shadow: white 1px 0 10px;
    
    }
    
    h2{
        margin : 4% 8% 0 0;
        font-size : 40px; 
        font-weight : lighter  
        
    }
    @media(max-width : 430px){
        h2{
            margin : 4% 8% 0 10%;
            font-size: 30px;
        }
    }

`

const CitiesSection = styled.div `
    margin-top : 1%;
    height : 80vh;
    display : flex;
    justify-content : center;
    flex-wrap : wrap;

    @media(max-width : 430px){
        margin-top : 4%;
        align-items : center;
    }
`

const CityCard = styled.div `

    margin : 2% 0 0 1%;
    text-align : center;
    height : 60%;
    width : 40%;
    div{
        width : 100%;
        height : 80%;
    }
    a{
        text-decoration : none;
        color : black ;
        font-size : 25px;
    }
        @media(max-width : 430px){
        width 80%;
        margin : 0;
        a{
            font-size : 12px;
        }
    }

`

function HomePage() {

    const [image, setimage] = useState([])

    useEffect(() => {
        fetch('https://trippy-konexio.herokuapp.com/api/home')
        .then(res => res.json())
        .then(res => setimage(res.cities))
    },[])

    return (
        <>
            <HeadSection>
                <Nav/>
                <HeadDiv>
                    <h2><span>Travel Trip</span><br/> ________________________<br/> Ton kiff en un click.</h2>
                </HeadDiv>
            </HeadSection>
            
                <CitiesSection>

                {image.map( e => (
                    <CityCard>
                        <Link to='hotels/rome'>
                            <div style={{background : `url("https://trippy-konexio.herokuapp.com${e.source}") no-repeat center/cover` }}>
                            </div>
                            <p>{e.name}</p>
                        </Link>
                    </CityCard>
                ))}

                </CitiesSection>

        </>
    )
}

export default HomePage
