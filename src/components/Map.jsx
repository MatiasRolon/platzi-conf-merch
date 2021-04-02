import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = ({data }) => {
    const mapStyles = {
        height: "50vh",
        width: "100%",
    };

    const defaultCenter = {
        lat: 19.4267261, //data.lat
        lng: -99.1718796 //data.lng
    };

    return (
        <LoadScript googleMapsApiKey='AIzaSyDbx6s-4T7VjTLTVNLj6Ekkj3wxgOH1AZM'>
            <GoogleMap 
                mapContainerStyle={mapStyles}
                zoom ={9}
                center={defaultCenter}>
                    <Marker position={defaultCenter}/>
            </GoogleMap>
        </LoadScript>
    )
}

export default Map
