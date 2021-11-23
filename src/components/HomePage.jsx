import styled from 'styled-components';

import logo from '../assets/logo.png'
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

const Header = styled.div `
background-color : #0E3D71;
height : 12vh;
display : flex;
justify-content : space-between;
align-items : center;

img{
    width : 12%
}

nav{
    display : flex;
    justify-content : space-around;
    width 30%;
}

a{
    color : white;
    font-size : larger;
    text-decoration : none;
}

a:hover{
    text-decoration : underline
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
    
`

function HomePage() {

    return (
        <>
            <HeadSection>
                <Header>
                    <img src={logo} alt="img" />
                    <nav>
                        <a href="">Hotel</a>
                        <a href="">Countries</a>
                        <a href="">Rooms</a>
                        <a href="">About</a>
                    </nav>
                </Header>
                <HeadDiv>
                    <h2><span>Travel Trip</span>, <br /> ton kiff en un click</h2>
                </HeadDiv>
            </HeadSection>
        </>
    )
}

export default HomePage
