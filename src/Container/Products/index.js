import React, { useEffect, useState } from 'react';
import axios from 'axios';

import SingleCard from '../../Components/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import CategeoryComponents from '../../Components/Categ';


const ProductContainer = ()=>{
    const [productData, setProductData] = useState([])
    const [productDataCat, setProductDataCat] = useState([]);
    const [currentCat, setCurrentCat] = useState ('smartphones');
    const fetchData = async ()=>{
        const data = await axios(`https://dummyjson.com/products/category/${currentCat}`);
        const myData = data.data.products;
        setProductData(myData)
        console.log('data',data);
    }
    console.log('currentCat',currentCat);
    const fetchDataCate = async ()=>{
        const data = await axios('https://dummyjson.com/products/categories');
        setProductDataCat(data.data)
        // console.log('datacate',data.data);
    }
    useEffect(()=>{
        fetchData();
        fetchDataCate();
        // eslint-disable-next-line
    },[])
    useEffect(()=>{
        fetchData();
        // eslint-disable-next-line
    },[currentCat])
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
            <Container>
                <Row>
                <Col sm={2}>
                    <CategeoryComponents
                        productDataCat={productDataCat}
                        currentCat={currentCat}
                        setCurrentCat={setCurrentCat} />
                    
                </Col>
                <Col sm={10}>
                    {
                    
                        productData && productData.length > 0 ? productData.map((item)=>{
                            return (
                                <SingleCard key={item.id} data={item} />
                            )
                        }) : 'Data is not found'
                    }
                </Col>
                </Row>
            </Container>
            
        </>
    )
}

export default ProductContainer;