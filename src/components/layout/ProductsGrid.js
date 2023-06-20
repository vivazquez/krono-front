import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';

export default function ProductsGrid(props) {  
    useEffect(()=>{
    },[]);

    return (
        <Row>
            {
                !props.apply_filter ? (
                    props.products.map((product, index) => (
                        <Col lg={3} className="" key={index}>
                            <div className='p-2'>
                                <div className='text-center pb-1'>
                                    <a href={`/collections/${product.name}`} className='green-color none-underline'><span>{product.name}</span></a>
                                </div>
                                <div className='text-center product-img-box'>
                                    <a href={`/collections/${product.name}`} className='green-color none-underline'>
                                        <img
                                            className="d-block w-100"
                                            src={product.img}
                                            alt="No Image"
                                        />
                                    </a>
                                </div>
                            </div>
                        </Col>
                    ))
                ) : (
                    props.names.length>0 ? (
                        props.products.map((product, index) => (
                            props.names.indexOf(product.name) != -1 && (
                                <Col lg={3} className="" key={index}>
                                <div className='p-2'>
                                    <div className='text-center pb-1'>
                                        <a href={`/collections/${product.name}`} className='green-color none-underline'><span>{product.name}</span></a>
                                    </div>
                                    <div className='text-center product-img-box'>
                                        <a href={`/collections/${product.name}`} className='green-color none-underline'>
                                            <img
                                                className="d-block w-100"
                                                src={product.img}
                                                alt="No Image"
                                            />
                                        </a>
                                    </div>
                                </div>
                            </Col>
                            )                            
                        ))
                    ) : (
                        <div className='text-center'>No Result.</div>
                    )
                    
                )
                
            }
        </Row>
    )
}