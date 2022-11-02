import React, { useState, useEffect } from 'react';
import H2TagComponents from '../../Components/H2Tag';


import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



const HomeContainer = ()=>{
    //console.log('Home Page Component');
    const [number, setNumber] = useState(5);
    const h2tagArrayData = ['Rohit', 'Abhishek'];
    
    

    useEffect(function(){
        console.log('Component did mount app start')
    }, [])

    const updateNu = ()=>{
        return (
            console.log('Return func')
        )
    }

    useEffect(function(){
        updateNu()
        console.log('Component Did  update app update')
    }, [number])

    

    useEffect(function(){
        return () =>{
            console.log('component unmount app destroyy/ leave jump to the next component ');
        };
    }, [])



    const handleData  = ()=>{
        return  h2tagArrayData.map((item, index)=>{
              //console.log('run data', item)
            return  <H2TagComponents key={index} tagValue={item}/>
          })
      }
    
    return (
        <>
        
        <Container>
            <Row>
                <Col md={6} xs={12}>
                    {
                        h2tagArrayData && h2tagArrayData.length > 0 ? handleData() : 'Not data  found'
                    }
                    <br />
                    <hr/>
                    <p>My updated value is :- 
                        <Badge bg="secondary">
                            {number}
                        </Badge>
                    </p>
                </Col>
                <Col md={6} xs={12} className="rightSecWrap">
                    <Button onClick={()=>{setNumber(number + 1)}} variant="warning">  Increase value
                            <Badge bg="secondary">
                                +
                            </Badge> 
                    </Button>
                    <Button variant="danger" onClick={()=>{setNumber(number - 1)}}>
                            -
                    </Button>
                    <button onClick={()=>{setNumber(5)}}>Reset</button>
                </Col>
            </Row>
        </Container>

        
       
        </>
    )

}

export default HomeContainer;