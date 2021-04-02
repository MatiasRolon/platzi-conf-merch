import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { MapContext } from '@react-google-maps/api';

const useGoogleAddress = address => {
    const [map, setMap] = useState({});
    const API = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyDbx6s-4T7VjTLTVNLj6Ekkj3wxgOH1AZ`

    useEffect( async () => {
        const response = await axios(API);
        setMap(response.data.results[0].geometry.location);
    }, []);

    return map;
};

export default useGoogleAddress;
