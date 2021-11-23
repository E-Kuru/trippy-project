import logo from '../assets/logo.png'
import styled from 'styled-components';

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
        text-decoration : underline
    }
`

    return (
        <>
            <Header>
                <img src={logo} alt="img" />
                <nav>
                    <a href="">Hotel</a>
                    <a href="">Countries</a>
                    <a href="">Rooms</a>
                    <a href="">About</a>
                </nav>
            </Header>

        </>
    )
}

export default Nav
