import Nav from "./Nav"
import styled from 'styled-components';

const TextNotFound = styled.div`

h1 {
    font-size: 350px;
    font-weight: lighter;
    text-align: center;
    margin-top: -70px;
    
}

p {
    text-align: center;
    font-size: 80px;
    margin-top: -280px;
    
}

`

function NotFound() {
    return (
        <div>
            <Nav/>
            
            <TextNotFound>
            <h1>404</h1>
            <p>Page Not Found</p>
            </TextNotFound>
        </div>
    )
}

export default NotFound
