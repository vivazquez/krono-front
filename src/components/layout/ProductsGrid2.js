import React, { useEffect, useState } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import data from '../../data';

export default function ProductsGrid2(props) {  
    useEffect(()=>{
    },[]);

    return (
        <Row>
            {
                props.products.map((product, index) => (
                    <Col lg={3} className="mb-4" key={index}>
                        <div className='p-2'>
                            <div className='text-center pb-1'>
                                <a href="#" className='green-color none-underline'><span>{product.name}</span></a>
                            </div>
                            <div className='text-center product-img-box mb-3'>
                                <a href="#" className='green-color none-underline'>
                                    <img
                                        className="d-block w-100"
                                        src={`${data.apiBaseUrl1}/krono/${product.code}-1`}
                                        alt="No Image"
                                    />
                                </a>
                            </div>
                            <div>
                                <div className='product_item py-2'>
                                    <span>Corte:</span><span className='pl-3'>{product.cut}</span>
                                </div>
                                <div className='product_item py-2'>
                                    {
                                        product.width === 0 ? (
                                            <>
                                                <span>Medidas:</span><span className='pl-3'>{product.length} mm</span>
                                            </>
                                        ) : (
                                            <>
                                                <span>Medidas:</span><span className='pl-3'>{product.length} x {product.width} mm</span>
                                            </>
                                        )    
                                    }          
                                </div>
                                <div className='product_item py-2'>
                                    <span>Precio:</span><span className='pl-3'>${product.price} MXN</span>
                                </div>
                                <div className='product_item py-2'>
                                    <span>-</span><span className='px-3'>1</span><span>+</span><Button className='add_to_bag ml-3'>Agregar a la bolsa</Button>
                                </div>

                            </div>
                        </div>
                    </Col>
                ))
            }
        </Row>
    )
}