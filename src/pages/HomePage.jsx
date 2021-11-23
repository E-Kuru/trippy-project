import styled from 'styled-components';
import { Link } from "react-router-dom"

import Nav from '../components/Nav';

import headParallax from '../assets/head-parallax.png'
import londonImg from '../assets/london.png'
import parisImg from '../assets/paris.png'
import niceImg from '../assets/nice.png'
import romeImg from '../assets/rome.png'
import newYorkImg from '../assets/new-york.png'

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
    color : white;

    display : flex;

    justify-content : flex-end;    

    text-align : center;

    span {
        font-weight : bolder;
    }
    
    h2{
        margin : 4% 8% 0 0;
        font-size : 40px; 
        font-weight : lighter  
    }


`

const CitiesSection = styled.div `
    margin-top : 1%;
    height : 100vh;
    display : flex;
    justify-content : center;
    flex-wrap : wrap;

`

const NewYork = styled.div `

    margin-right : 2%;
    text-align : center;
    height : 50%;
    width : 40%;
    // border : 2px solid black;
    div{
        background : url('${newYorkImg}') no-repeat center/cover;
        height : 80%;
    }
    a{
        text-decoration : none;
        color : black ;
        font-size : 25px;
    }
`
const Rome = styled.div `

    text-align : center;
    height : 50%;
    width : 40%;
    // border : 2px solid black;
    div{
        background : url('${romeImg}') no-repeat center/cover;
        height : 80%;
    }
    a{
        text-decoration : none;
        color : black ;
        font-size : 25px;
    }
`

const London = styled.div `

    margin : 2% 0 0 1%;
    text-align : center;
    height : 40%;
    width : 30%;
    // border : 2px solid black;
    div{
        background : url('${londonImg}') no-repeat center/cover;
        height : 80%;
    }
    a{
        text-decoration : none;
        color : black ;
        font-size : 25px;
    }
`
const Paris = styled.div `

    margin : 2% 0 0 1%;
    text-align : center;
    height : 40%;
    width : 30%;
    // border : 2px solid black;
    div{
        background : url('${parisImg}') no-repeat center/cover;
        height : 80%;
    }
    a{
        text-decoration : none;
        color : black ;
        font-size : 25px;
    }
`
const Nice = styled.div `

    margin : 2% 0 0 1%;
    text-align : center;
    height : 40%;
    width : 30%;
    // border : 2px solid black;
    div{
        background : url('${niceImg}') no-repeat center/cover;
        height : 80%;
    }
    a{
        text-decoration : none;
        color : black ;
        font-size : 25px;
    }
`

function HomePage() {

    return (
        <>
            <HeadSection>
                <Nav/>
                <HeadDiv>
                    <h2><span>Travel Trip</span>, <br /> ton kiff en un click</h2>
                </HeadDiv>
            </HeadSection>
            
                <CitiesSection>

                        <NewYork>
                            <Link to='hotels:new-york'>
                            <div></div>
                            <h3>New York</h3>
                            </Link>
                        </NewYork>

                        <Rome>
                            <Link to='hotels:rome'>
                            <div></div>
                            <h3>Rome</h3>
                            </Link>
                        </Rome>

                        <London>
                            <Link to='hotels:london'>
                            <div></div>
                            <h3>London</h3>
                            </Link>
                        </London>

                        <Paris>
                            <Link to='hotels:paris'>
                            <div></div>
                            <h3>Paris</h3>
                            </Link>
                        </Paris>

                        <Nice>
                            <Link to='hotels:nice'>
                            <div></div>
                            <h3>Nice</h3>
                            </Link>
                        </Nice>

                </CitiesSection>
        </>
    )
}

export default HomePage
