import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import star from "../assets/star.png"

const Etoiles = styled.img`
    height: 20px;
    width: 20px;
`
const Stared = styled.h3`
    margin: 0;
`

const Stars = (props) => {
    return (
        <div>
            {props.hotel.stars === 1 &&
                <div>
                    <Stared><Etoiles src={star} /></Stared>
                </div>}
            {props.hotel.stars === 2 &&
                <div>
                    <Stared><Etoiles src={star} /> <Etoiles src={star} /></Stared>
                </div>}
            {props.hotel.stars === 3 &&
                <div>
                    <Stared><Etoiles src={star} /> <Etoiles src={star} /> <Etoiles src={star} /></Stared>
                </div>}
            {props.hotel.stars === 4 &&
                <div>
                    <Stared><Etoiles src={star} /> <Etoiles src={star} /> <Etoiles src={star} /> <Etoiles src={star} /></Stared>
                </div>}
            {props.hotel.stars === 5 &&
                <div>
                    <Stared><Etoiles src={star} /></Stared><Stared><Etoiles src={star} /></Stared><Stared><Etoiles src={star} /></Stared><Stared><Etoiles src={star} /></Stared><Stared><Etoiles src={star} /></Stared>
                </div>}

        </div>
    );
};

export default Stars;