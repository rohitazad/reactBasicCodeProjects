import React, { useEffect, useState } from 'react';
import axios from 'axios';

import SingleCard from '../../Components/Card';

const ProductContainer = ()=>{
    const [productData, setProductData] = useState([])
    const API_URL = 'https://dummyjson.com/products?limit=20'
    const fetchData = async ()=>{
        const data = await axios(API_URL);
        const myData = data.data.products;
        setProductData(myData)
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
                
                productData && productData.length > 0 ? productData.map((item)=>{
                    return (
                        <SingleCard key={item.id} data={item} />
                    )
                }) : 'Data is not found'
            }
        </>
    )
}

export default ProductContainer;