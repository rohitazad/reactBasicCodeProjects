import React from 'react';
import BlogListComponents from '../../Components/BlogList';

const BlogContainer = ({blogData})=>{
    
    return (
        <>
            Hello i m Blog Container Page
            <br />
            <BlogListComponents blogData={blogData} />
        </>
    )
}
export default BlogContainer;