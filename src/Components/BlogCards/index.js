import React from 'react';
import BlogSingleCardCompo from './singlecard';

const BlogCardCompo = ({blogData})=>{
    return (
        <>Hello i m blog card 
        <br />
        {
            blogData && blogData.length > 0 ? blogData.map((item)=>{
                return <BlogSingleCardCompo key={item.title} data={item} /> 
            }) : 'No data Fund'
        }
        </>
    )
}
export default BlogCardCompo;