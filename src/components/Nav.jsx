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
        width : 12%;
    }

    nav{
        margin-right : 2%;
        display : flex;
        justify-content : space-around;
        }
        // width 30%;
    }

    a{
        margin-right : 4%;
        color : white;
        font-size : 24px;
        text-decoration : none;
    }

    a:hover{
         color : #FEAD33;
    }

    @media(max-width : 780px){
        nav{
            a{
                font-size : 20px;
            }
        }
        
        img{
            width : 20%;
        }

    }

    @media(max-width : 430px){
        img{
            width : 28%;
        }

        nav{
            a{
                margin-right : 2%;
                font-size : 14px;
            }
        }
    }

    @media(max-width : 320px){
        nav{
            a{
                font-size : 12px;
            }
        }
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
