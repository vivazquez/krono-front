import React, { useEffect, useState } from 'react';
import { Accordion, Button, Form } from 'react-bootstrap';
import EventEmitter from '../../utils/EventEmitter';

export default function AdvancedFilter(props) {  
    const [name, setName] = useState("");
    const [cut, setCut] = useState("");
    const [color, setColor] = useState("");
    const [size, setSize] = useState("");
    const [price, setPrice] = useState("");

    useEffect(()=>{
    },[]);

    const selectName =(e)=> {
        setName(e.target.value);
    }
    const selectCut =(e)=> {
        setCut(e.target.value);
    }
    const selectColor =(e)=> {
        setColor(e.target.value);
    }
    const selectSize =(e)=> {
        setSize(e.target.value);
    }
    const selectPrice =(e)=> {
        setPrice(e.target.value);
    }

    const generateFilterEvent = () =>{
        EventEmitter.emit('doFilter', cut, color, size, price);
    }

    return (
        <div className=''>
            <h4 className='green-color'>FILTRO</h4>
            <div>
                <Accordion alwaysOpen>  
                    <Accordion.Item eventKey="0">  
                        <Accordion.Header>Gemas</Accordion.Header>  
                        <Accordion.Body>  
                            <Form onChange={selectName}>
                                {
                                    props.name_filter.map((item, index) => (
                                        <div className="mb-3" key={index}>
                                            <Form.Check
                                                inline
                                                label={item}
                                                name="group1"
                                                type="radio"
                                                value={item}
                                            />
                                        </div>
                                    ))
                                }
                            </Form>  
                        </Accordion.Body>  
                    </Accordion.Item>  
                    <Accordion.Item eventKey="1">  
                        <Accordion.Header>Corte</Accordion.Header>  
                        <Accordion.Body>  
                            <Form onChange={selectCut}>
                                <div className="mb-3">
                                    <Form.Check
                                        inline
                                        label="Redondo"
                                        name="group2"
                                        value="Redondo"
                                        type="radio"
                                    />
                                </div>
                                {
                                    props.cut_filter.map((item, index) => (
                                        <div className="mb-3" key={index}>
                                            <Form.Check
                                                inline
                                                label={item}
                                                name="group2"
                                                value={item}
                                                type="radio"
                                            />
                                        </div>
                                    ))
                                }
                            </Form>    
                        </Accordion.Body>  
                    </Accordion.Item>  
                    <Accordion.Item eventKey="2">  
                        <Accordion.Header>Color</Accordion.Header>  
                        <Accordion.Body>  
                            <Form onChange={selectColor}>
                                {
                                    props.color_filter.map((item, index) => (
                                        <div className="mb-3" key={index}>
                                            <Form.Check
                                                inline
                                                label={item}
                                                name="group3"
                                                value={item}
                                                type="radio"
                                            />
                                        </div>
                                    ))
                                }
                                
                            </Form> 
                        </Accordion.Body>  
                    </Accordion.Item> 
                    <Accordion.Item eventKey="3">  
                        <Accordion.Header>Medidas (mm)</Accordion.Header>  
                        <Accordion.Body>  
                            <Form onChange={selectSize} >
                                <div className="mb-3">
                                    <Form.Check
                                        inline
                                        label="3.2"
                                        name="group4"
                                        value="3.2"
                                        type="radio"
                                    />
                                </div>
                                <div className="mb-3">
                                    <Form.Check
                                        inline
                                        label="5.5 x 5.3"
                                        name="group4"
                                        value="5.5x5.3"
                                        type="radio"
                                    />
                                </div>
                            </Form> 
                        </Accordion.Body>  
                    </Accordion.Item> 
                    <Accordion.Item eventKey="4">  
                        <Accordion.Header>Rango de precio</Accordion.Header>  
                        <Accordion.Body>  
                            <Form onChange={selectPrice} className='price_filter_form'>
                                <div className="mb-3">
                                    <Form.Check
                                        inline
                                        label="$0 - $1,000.00 MXN"
                                        name="group5"
                                        value="$0 - $1,000.00 MXN"
                                        type="radio"
                                    />
                                </div>
                                <div className="mb-3">
                                    <Form.Check
                                        inline
                                        label="$1,000.00 MXN - $2,000.00 MXN"
                                        name="group5"
                                        value="$1,000.00 MXN - $2,000.00 MXN"
                                        type="radio"
                                    />
                                </div>
                                <div className="mb-3">
                                    <Form.Check
                                        inline
                                        label="$3,000.00 MXN - $4,000.00 MXN"
                                        name="group5"
                                        value="$3,000.00 MXN - $4,000.00 MXN"
                                        type="radio"
                                    />
                                </div>
                                <div className="mb-3">
                                    <Form.Check
                                        inline
                                        label="$4,000.00 MXN - $5,000.00 MXN"
                                        name="group5"
                                        value="$4,000.00 MXN - $5,000.00 MXN"
                                        type="radio"
                                    />
                                </div>
                            </Form> 
                        </Accordion.Body>  
                    </Accordion.Item> 
                </Accordion>  
            </div>
            <div className='filter_apply_btn_box py-3 text-center'>
                <Button className="apply_filter_btn px-5" onClick={generateFilterEvent}>Aplicar Filtro</Button>
            </div>
        </div>
    )
}