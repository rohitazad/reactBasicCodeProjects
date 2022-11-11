
import React from 'react';
import {DataState} from '../../Context/Context';
const AboutPageContainer = ()=>{
    let myData = DataState();
    const BlogData = myData.state.blogData
    return (
        <>
           <h1>Hi i m about page container</h1> 
           {
            BlogData && BlogData.length > 0 ? BlogData.map((item)=>{
               return(
                <h4 key={item.title}> 
                    {item.title} - {item.date}
                </h4>
               ) 
            }): ''
           }
        </>
    )
}
export default AboutPageContainer;