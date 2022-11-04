import React from 'react';


const SingleCard = ({data})=>{
    console.log('data', data)
    return (
        <>
            <div className='blog'>
                <h2>{data.title}</h2>
                {
                    data.tags.map((item)=>{
                        return (
                            <span key={item}>{item}</span>
                        )
                    })
                }
                <p>{data.body} </p>
                
            </div>
        </>
    )
}

export default SingleCard;