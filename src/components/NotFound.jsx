import Nav from "./Nav"
import styled from 'styled-components';

const Text = styled.div`
text-align: center;
p{
    font-size: 14em;
}
`
const Textp = styled.div`
text-align: center;
p{
    font-size: 8
    em;
}
`
function NotFound() {
    return (
        <div>
            <Nav/>
            <Text>
            <p>404</p>
            </Text>
            <Textp>
            <p>Page Not Found</p>
            </Textp>
            
        </div>
    )
}

export default NotFound
