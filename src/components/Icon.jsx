import {FaSwimmingPool, FaCocktail, FaSpa, FaWheelchair, FaSuitcase, FaDog,FaShuttleVan, FaParking, FaSmoking} from 'react-icons/fa';
import {MdRoomService, MdOutlineSmokeFree, MdOutlineLanguage,MdFamilyRestroom, MdMeetingRoom} from 'react-icons/md';
import {AiOutlineWifi} from 'react-icons/ai';
import {CgGym} from 'react-icons/cg';
import {GiCroissant, GiComputerFan, GiWashingMachine} from 'react-icons/gi';
import {RiFridgeFill} from 'react-icons/ri';
import {BiBed, BiRestaurant} from 'react-icons/bi';
import styled from 'styled-components';


const Iconics = styled.div`
   padding-right: 10px;

`

function Icon(props) {
    return (
        <>
            <Iconics>
                {props.comodity === "wifi" && <AiOutlineWifi />}
                {props.comodity === "swimming pool" && <FaSwimmingPool />}
                {props.comodity === "room service" && <MdRoomService />}
                {props.comodity === "bar" && <FaCocktail />}
                {props.comodity === "spa" && <FaSpa />}
                {props.comodity === "gym" && <CgGym />}
                {props.comodity === "disabled access" && <FaWheelchair />}
                {props.comodity === "conciergerie" && <FaSuitcase />}
                {props.comodity === "non smoking" && <MdOutlineSmokeFree />}
                {props.comodity === "dry cleaning" && <GiWashingMachine />}
                {props.comodity === "multilingual staff" && <MdOutlineLanguage />}
                {props.comodity === "breakfast included" && <GiCroissant />}
                {props.comodity === "air conditioning" && <GiComputerFan />}
                {props.comodity === "minibar" && <RiFridgeFill />}
                {props.comodity === "suites" && <BiBed />}
                {props.comodity === "family" && <MdFamilyRestroom />}
                {props.comodity === "restaurant" && <BiRestaurant />}
                {props.comodity === "meeting rooms" && <MdMeetingRoom />}
                {props.comodity === "animals" && <FaDog/>}
                {props.comodity === "shuttle" && <FaShuttleVan/>}
                {props.comodity === "parking" && <FaParking/>}
                {props.comodity === "smoking" && <FaSmoking/>}
            </Iconics>
        </>
    )
}

export default Icon ;
