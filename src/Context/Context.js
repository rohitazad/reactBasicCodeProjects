import React, {useReducer, useContext} from "react";

import {MyAppReducer} from './Reducer';

const BlogContextData = React.createContext();

const ContextFunction = ({children})=>{

    const [state, dispatch] = useReducer(MyAppReducer, {
        blogData:[
            {title:'Blog. 1', date:'09-11-2022'},
            {title:'Blog. 2', date:'08-11-2022'},
             {title:'Blog. 3', date:'07-11-2022'},
             {title:'Blog. 4', date:'06-11-2022'}
        ],
        cateData:[]
    })

    return (
        <>
           <BlogContextData.Provider value={{state, dispatch}}>
                {children}
           </BlogContextData.Provider> 
        </>
    )
}
export default ContextFunction;


export const DataState = ()=>{
    return useContext(BlogContextData);
}