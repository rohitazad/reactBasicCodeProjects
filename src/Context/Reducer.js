
export const  MyAppReducer = (state, action)=>{
    switch(action.type){
        case 'ADD_BLOG':
            return{
                ...state, blogData:action.payload
            };
        case 'CATE_DATA':
            return{
                ...state, cateData:action.payload
            };
        default:
            return {...state}
    }
}