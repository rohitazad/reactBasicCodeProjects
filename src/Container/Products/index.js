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
    const [inputValue, setInputValue] = useState (currentCat)
    const fetchData = async ()=>{
        const data = await axios(`https://dummyjson.com/products/category/${currentCat}`);
        const myData = data.data.products;
        
        setProductData(myData)
    }
    console.log('currentCat',currentCat);
    const fetchDataCate = async ()=>{
        const data = await axios('https://dummyjson.com/products/categories');
        //console.log('datacate',data.data);
        setProductDataCat(data.data)
         
    }
    
    const handleSubmit = (e)=>{
        e.preventDefault();
        let catValue = inputValue ;

        
        if(productDataCat.indexOf(catValue) === -1 ){
            alert('This text is not in the categoery')
        }else {
            setCurrentCat(catValue)
        }
        console.log('Form Subnmit ')
    }
    useEffect( ()=>{
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
                    <select value={currentCat} onChange={(e)=>{
                        setCurrentCat(e.target.value)
                    }}>
                    {
                        productDataCat && productDataCat.length > 0 ? productDataCat.map((item)=>{
                            return (
                                <option key={item} value={item}>
                                    {item}
                                </option>
                            )
                        }) : <option>No item</option>
                    }
                     </select>
                    <div className="">
                        <form onSubmit={handleSubmit}>
                            <input type="text" value={inputValue} onChange={(e)=>{
                                    setInputValue(e.target.value.toLowerCase())
                                }}/>
                            <button type="submit">Search Item</button> 
                        </form>
                        
                    </div>

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