import logo from '../assets/logo.png'
import styled from 'styled-components';
import { Link } from "react-router-dom"

function Nav() {

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
        color : #FEAD33;
    }
`

    return (
        <>
            <Header>
                <img src={logo} alt="img" />
                <nav>
                    <Link to='/'href="">Home</Link>
                    <Link to='/'href="">Countries</Link>
                    <Link to='/favorites'href="">Favorites</Link>
                    <Link to='/About'>About</Link>
                </nav>
            </Header>

        </>
    )
}

export default Nav
