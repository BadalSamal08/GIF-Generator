import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react'



const API_KEY = import.meta.env.VITE_API_KEY;



const UseGif = (tag) => {

    const randomurl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

    const tagurl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
    const [gif, setGif] = useState('');

    const [loading, setLoading] = useState("false");

    const fetchData = async (tag) => {
        setLoading(true);

        const { data } = await axios.get(tag ? tagurl : randomurl);
        const imageSource = data.data.images.downsized_large.url;
        setGif(imageSource);
        console.log(imageSource);
        setLoading(false);
    }
    useEffect(() => {
        fetchData('car');
    }, [])
    return { gif, loading, fetchData };

}


export default UseGif
