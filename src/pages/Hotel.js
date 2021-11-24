import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Nav from '../components/Nav';


const Hotel = props => {
    return (
        <>
            <Nav/>
            <img src="https://www.parisinfo.com/var/otcp/sites/images/media/1.-photos/03.-hebergement-630-x-405/hotel-enseigne-neon-630x405-c-thinkstock/31513-1-fre-FR/Hotel-enseigne-neon-630x405-C-Thinkstock.jpg" alt="Hotel" />
        </>
    );
};

export default Hotel;