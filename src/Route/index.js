import React  from 'react';


import { BrowserRouter, Routes, Route } from 'react-router-dom';


import HomeContainer from '../Container/Home';
import AboutPageContainer from '../Container/About';

import HeaderComponents from '../Components/Header';
import FotterComponents from '../Components/Footer';
import ProductContainer from '../Container/Products'
import ProductDeatilsContainer from '../Container/PrductDetails';
import UseRefComp from '../Container/UseRef';
const AllRouteWrap = ()=>{

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
                </Routes>
                <FotterComponents />
            </BrowserRouter>
        </>
    )
}

export default AllRouteWrap;