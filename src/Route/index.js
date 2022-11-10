import React  from 'react';


import { BrowserRouter, Routes, Route } from 'react-router-dom';


import HomeContainer from '../Container/Home';
import AboutPageContainer from '../Container/About';

import HeaderComponents from '../Components/Header';
import FotterComponents from '../Components/Footer';
import ProductContainer from '../Container/Products'
import ProductDeatilsContainer from '../Container/PrductDetails';
import BlogContainer from '../Container/Blog'
import UseRefComp from '../Container/UseRef';
const AllRouteWrap = ()=>{
    const blogData = [
        {title:'Blog. 1', date:'09-11-2022'},
        {title:'Blog. 2', date:'08-11-2022'},
         {title:'Blog. 3', date:'07-11-2022'},
         {title:'Blog. 4', date:'06-11-2022'}
    ]
    return (
        <>
            
             <BrowserRouter>
                <HeaderComponents />
                <Routes>
                    <Route path="/" element={<HomeContainer />}/>
                    <Route path="/about" element={<AboutPageContainer />}/>
                    <Route path="/useref" element={<UseRefComp/>} />
                    <Route path="/products" element={<ProductContainer/>} />
                    <Route path="/products-details/:productid" element={<ProductDeatilsContainer />}/>
                    <Route path="/blog" element={<BlogContainer blogData={blogData}/>} />
                    
                </Routes>
                <FotterComponents />
            </BrowserRouter>
        </>
    )
}

export default AllRouteWrap;