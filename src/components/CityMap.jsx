import GoogleMapReact from 'google-map-react'
import styled from 'styled-components'

const Map = styled.div `
    width : 90%;
    height : 100%;
    padding-top: 22px;

`

function CityMap (props) {

    return (
        <Map>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "" }}
                defaultCenter={{
                    lat : props.center.lat,
                    lng : props.center.lon
                }}
                defaultZoom={14}>
                    {props.children}
            </GoogleMapReact>
        </Map>
    )
}

export default CityMap
