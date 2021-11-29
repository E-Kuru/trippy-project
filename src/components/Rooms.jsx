import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import styled from 'styled-components';

const Bedrooms = styled.div`
    color: white;
    display: flex;
    margin-top: 50px;
`

const RoomInfos = styled.div`
    display: flex;
    flex-direction : column;
    padding: 0 10px;
    border : 1px solid white;
    text-align : center;

`

const Rooms = props => {
    const [rooms, setRooms] = useState([])
    useEffect(() => {
        fetch(`https://trippy-konexio.herokuapp.com/api/hotels/${props.id}/rooms`)
            .then(res => res.json())
            .then(res => setRooms(res.results))
    }, [])



    return (
        <>
            <Bedrooms>
                {rooms.map(e => (
                    <RoomInfos>
                        <p>Nombre de personnes : {e.people}</p>
                        <p>prix de la nuit : {e.price}</p>
                        {e.isBathroom ? <p> Bathroom </p> : <p>No Bathroom</p>}
                    </RoomInfos>
                ))}
            </Bedrooms>
        </>
    );
};

export default Rooms;