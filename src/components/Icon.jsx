import styled from 'styled-components'
import {FaSwimmingPool, FaCocktail, FaSpa, FaWheelchair, FaSuitcase, } from 'react-icons/fa';
import {MdRoomService, MdOutlineSmokeFree, MdOutlineLanguage} from 'react-icons/md';
import {AiOutlineWifi} from 'react-icons/ai';
import {CgGym} from 'react-icons/cg';
import {GiCroissant, GiComputerFan, GiWashingMachine} from 'react-icons/gi';
import {RiFridgeFill} from 'react-icons/ri';
import {BiBed} from 'react-icons/bi';

function Icon (props) {




    return (
        <>
   {props.comodity === "wifi" && <AiOutlineWifi/>}
   {props.comodity === "wifi" && <FaSwimmingPool/>}
   {props.comodity === "wifi" && <MdRoomService/>}
   {props.comodity === "wifi" &&  <FaCocktail/>}
   {props.comodity === "wifi" && <FaSpa/>}
   {props.comodity === "wifi" && <CgGym/>}
   {props.comodity === "wifi" && <FaWheelchair/>}
   {props.comodity === "wifi" && <FaSuitcase/>}
   {props.comodity === "wifi" && <MdOutlineSmokeFree/>}
   {props.comodity === "wifi" && <GiWashingMachine/>}
   {props.comodity === "wifi" && <MdOutlineLanguage/>}
   {props.comodity === "wifi" &&  <GiCroissant/>}
   {props.comodity === "wifi" &&  <GiComputerFan/>}
   {props.comodity === "wifi" && <RiFridgeFill/>}
   {props.comodity === "wifi" &&  <BiBed/>}
     
           
        </>
    )
}

export default Icon
