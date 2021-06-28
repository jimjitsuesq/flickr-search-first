import React, { useState, useEffect } from "react";
import axios from 'axios';
import apiKey from './config.js'

const useFetch = () => {
    const [data, setData] = useState( {images: []} );
    const [url, setUrl] = useState (`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=cats&per_page=24&format=json&nojsoncallback=1`)
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false); 

    useEffect( () => {
        const fetchData = async () => {
            setError(false);
            setLoading(true);
        
            try {
                const result = await axios(url);

                setData(result.data)
            } catch (error) {
                setError(true);
            }

            setLoading(false);
        };

        fetchData();
        
        console.log({data})
    }, [url]);

    return [{ data, loading, error}];
}

export {useFetch};