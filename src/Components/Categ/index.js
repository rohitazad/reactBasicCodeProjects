import React from 'react';

import ListGroup from 'react-bootstrap/ListGroup';

const CategeoryComponents = ({productDataCat, currentCat, setCurrentCat})=>{

    return (
        <>
            <h4>Categeory : -</h4>
            <ListGroup>
                {
                    productDataCat && productDataCat.length > 0 ? productDataCat.map((item)=>{
                        return (
                            <ListGroup.Item key={item} onClick={()=>{setCurrentCat(item)}} className={item === currentCat ? 'active' : ''}>
                                {item}
                            </ListGroup.Item>
                        )
                    }) : ''
                }
            </ListGroup>
        </>
    )
}

export default CategeoryComponents;