import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Spinner from './Spinner';
import UseGif from '../hooks/UseGif';
// import 'dotenv/config'
const API_KEY = import.meta.env.VITE_API_KEY;
const Tag = () => {
    // console.log(API_KEY);
    const [tag, setTag] = useState("car ");

    const { gif, loading, fetchData } = UseGif(tag);

    const clickHandler = (tag) => {
        fetchData(tag);
    }

    return (
        <div className='w-1/2 bg-blue-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]'>

            <h1 className='mt-[15px] text-2xl underline uppercase font-bold'>Random {tag} Gif</h1>
            {
                loading ? <Spinner /> : <img src={gif} width="450" />
            }

            <input type="text"
                className='w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center'
                onChange={(event) => setTag(event.target.value)}
                value={tag}
            />

            <button
                className='w-10/12 bg-yellow-500 text-lg py-2 rounded-lg mb-[20px]'
                onClick={clickHandler}>
                Generate
            </button>

        </div>
    )
}

export default Tag
