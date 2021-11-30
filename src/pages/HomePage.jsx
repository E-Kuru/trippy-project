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
    height : 100vh;
    display : flex;
    justify-content : center;
    flex-wrap : wrap;

    @media(max-width : 380px){
        margin-top : 4%;
        align-items : center;
    }
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

    @media(max-width : 380px){
        width 80%;
        margin : 0;
        a{
            font-size : 12px;
        }
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

        @media(max-width : 380px){
        width 80%;
        margin : 0;
        a{
            font-size : 12px;
        }
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

        @media(max-width : 380px){
        width 80%;
        margin : 0;
        a{
            font-size : 12px;
        }
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

        @media(max-width : 380px){
        width 80%;
        margin : 0;
        a{
            font-size : 12px;
        }
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

        @media(max-width : 380px){
        width 80%;
        margin : 0;
        a{
            font-size : 12px;
        }
    }

`

function HomePage() {

    // const [image, setimage] = useState([])

    // useEffect(() => {
    //     fetch('https://trippy-konexio.herokuapp.com/api/home')
    //     .then(res => res.json())
    //     .then(res => setimage(res.cities))
    // },[])

    return (
        <>
            <HeadSection>
                <Nav/>
                <HeadDiv>
                    <h2><span>Travel Trip</span><br/> ________________________<br/> Ton kiff en un click.</h2>
                </HeadDiv>
            </HeadSection>
            
                <CitiesSection>

                        <NewYork>
                            <Link to='hotels/new-york'>
                            <div></div>
                            <h3>New York</h3>
                            </Link>
                        </NewYork>

                        <Rome>
                            <Link to='hotels/rome'>
                            <div></div>
                            <h3>Rome</h3>
                            </Link>
                        </Rome>

                        <London>
                            <Link to='hotels/london'>
                            <div></div>
                            <h3>London</h3>
                            </Link>
                        </London>

                        <Paris>
                            <Link to='hotels/paris'>
                            <div></div>
                            <h3>Paris</h3>
                            </Link>
                        </Paris>

                        <Nice>
                            <Link to='hotels/nice'>
                            <div></div>
                            <h3>Nice</h3>
                            </Link>
                        </Nice>

                </CitiesSection>

                {/* {image.map( e => (
                    <div>
                        <p>{e.name}</p>
                        <img src={`https://trippy-konexio.herokuapp.com${e.source}`} alt="img" style={{width : '150px',height : '150px'}}/>
                    </div>
                ))} */}
        </>
    )
}

export default HomePage
