import styled from 'styled-components';

import Nav from './Nav';

import headParallax from '../assets/head-parallax.png'
import London from '../assets/london.png'
import Paris from '../assets/paris.png'
import Nice from '../assets/nice.png'
import Rome from '../assets/rome.png'
import NewYork from '../assets/new-york.png'

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

const CountriesSection = styled.div `
    height : 100vh;
    border : 4px solid black;
    background-color : white;
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
            
            <CountriesSection>

            </CountriesSection>
        </>
    )
}

export default HomePage
