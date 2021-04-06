import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { MapContext } from '@react-google-maps/api';

const useGoogleAddress = address => {
    const [map, setMap] = useState({});
    const API = `${process.env.GEODECODE_API_URL}json?address=${address}&key=${process.env.GOOGLE_MAPS_API_KEY}`

    useEffect( async () => {
        const response = await axios(API);
        setMap(response.data.results[0].geometry.location);
    }, []);

    return map;
};

export default useGoogleAddress;
