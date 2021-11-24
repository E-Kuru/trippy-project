import styled from "styled-components"

import { FaMapMarkerAlt } from 'react-icons/fa'

const MarkerContainer = styled.div `
  width: 40px;
  height: 40px;
  position: relative;
`
const P = styled.p `
  padding : 4%;
  text-align : center;
  background-color : rgba(0,0,0,0.6);
  font-size : 12px;
  color : white;
`
const Marker = props => {

  console.log(props.price);

  return (
    <MarkerContainer>

      <FaMapMarkerAlt style={{ width: '25px', height: '25px', color: `${props.color}` }} />
      <P>{props.price}€</P>

    </MarkerContainer>
  )
}

export default Marker