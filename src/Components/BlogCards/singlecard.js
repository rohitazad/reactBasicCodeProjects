import React from 'react';

const BlogSingleCardCompo = ({data})=>{
    return (
        <>
        <h4>{
            data.title
        }
        <span>{data.date}</span>
        </h4>
        </>
    )
}
export default BlogSingleCardCompo;