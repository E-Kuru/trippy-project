import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Header = styled.div`
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


const Hotel = props => {
    return (
        <>
            <div>
            </div>
            <img src="https://www.parisinfo.com/var/otcp/sites/images/media/1.-photos/03.-hebergement-630-x-405/hotel-enseigne-neon-630x405-c-thinkstock/31513-1-fre-FR/Hotel-enseigne-neon-630x405-C-Thinkstock.jpg" alt="Hotel" />
        </>
    );
};

export default Hotel;