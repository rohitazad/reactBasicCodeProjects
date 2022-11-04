import React, { useEffect, useState } from 'react';
import axios from 'axios';

import SingleCard from '../../Components/Card';

const ProductContainer = ()=>{
    const [postData, setPostData] = useState([])
    const API_URL = 'https://dummyjson.com/posts?limit=10'
    const fetchData = async ()=>{
        const data = await axios(API_URL);
        const myData = data.data.posts;
        setPostData(myData)
        console.log('data',data);
    }
    useEffect(()=>{
        fetchData()
        // eslint-disable-next-line
    },[])
    return (
        <>
            <h1>My Product page</h1>
            <p>
            https://dummyjson.com/
            <br />
            https://dummyjson.com/posts
            <br />
            https://dummyjson.com/posts/1
            <br />
            https://dummyjson.com/
            </p>
            {
                
                postData && postData.length > 0 ? postData.map((item)=>{
                    return (
                        <SingleCard key={item.id} data={item} />
                    )
                }) : 'Data is not found'
            }
        </>
    )
}

export default ProductContainer;