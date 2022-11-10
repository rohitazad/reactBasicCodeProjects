import React from 'react';
import BlogCardCompo from '../BlogCards'

const BlogListComponents = ({blogData})=>{
    return (
        <>
        <h2>Hello i m Blog List Components</h2>
        <br />
        <BlogCardCompo blogData={blogData} />
        </>
    )
}

export default BlogListComponents;