import React from 'react';
import BlogSingleCardCompo from './singlecard';

import {DataState} from '../../Context/Context';

const BlogCardCompo = ()=>{
    let myStateData = DataState();
    let blogData = myStateData.state.blogData;
    const addMoreDataHanlder = ()=>{
        let moreBlogData = {
            title:'MoreData Add',
            date:'11-11-2022'
        }
        const myCompletdData = blogData
        myCompletdData.push(moreBlogData);
        myStateData.dispatch({
            payload:myCompletdData,
            type:'ADD_BLOG'
        })
    }
    return (
        <>Hello i m blog card <br />
        <button onClick={addMoreDataHanlder}>Add more data</button>
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