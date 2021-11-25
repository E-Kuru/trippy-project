import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import star from "../assets/star.png"

const Etoiles = styled.img`
    height: 20px;
    width: 20px;
`

const Stars = (props) => {
    return (
        <div>
            {props.hotel.stars === 1 && <p><Etoiles src={star} /></p>}
            {props.hotel.stars === 2 &&
                <div>
                    <p><Etoiles src={star} /></p> <p><Etoiles src={star} /></p>
                </div>}
            {props.hotel.stars === 3 &&
                <div>
                    <p><Etoiles src={star} /> <Etoiles src={star} /> <Etoiles src={star} /></p>
                </div>}
            {props.hotel.stars === 4 &&
                <div>
                    <p><Etoiles src={star} /> <Etoiles src={star} /> <Etoiles src={star} /> <Etoiles src={star} /></p>
                </div>}
            {props.hotel.stars === 5 &&
                <div>
                    <p><Etoiles src={star} /></p><p><Etoiles src={star} /></p><p><Etoiles src={star} /></p><p><Etoiles src={star} /></p><p><Etoiles src={star} /></p>
                </div>}

        </div>
    );
};

export default Stars;