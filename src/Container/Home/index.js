import React, { useState } from 'react';
import H2TagComponents from '../../Components/H2Tag';
import HeaderComponents from '../../Components/Header';
import FotterComponents from '../../Components/Footer';
const HomeContainer = ()=>{
    const [number, setNumber] = useState(5);
    const h2tagArrayData = ['Rohit', 'Abhishek'];
    const handleData  = ()=>{
      return  h2tagArrayData.map((item, index)=>{
            //console.log('run data', item)
          return  <H2TagComponents key={index} tagValue={item}/>
        })
    }
    
    
    return (
        <>
        <HeaderComponents/>
            {
                h2tagArrayData && h2tagArrayData.length > 0 ? handleData() : 'Not data  found'
            }
            <br />
            <hr/>
            <p>My updated value is :- {number}</p>
            <button onClick={()=>{setNumber(number + 1)}}>+ increase</button>
            <button onClick={()=>{setNumber(number - 1)}}>- decrease</button>
            <button onClick={()=>{setNumber(5)}}>Reset</button>
        <FotterComponents />
        </>
    )

}

export default HomeContainer;