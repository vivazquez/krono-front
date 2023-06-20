import React, { useEffect, useState } from 'react';
import { Accordion, Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import EventEmitter from '../../utils/EventEmitter';

export default function Filter(props) {  
    const [name, setName] = useState("");
    const [cut, setCut] = useState("");
    const [color, setColor] = useState("");
    const navigate = useNavigate();

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
    const generateFilterEvent = () =>{
        if(name != ""){
            navigate("/collections/"+name);
        }
       EventEmitter.emit('doCollectionFilter', cut, color);
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
                </Accordion>  
            </div>
            <div className='filter_apply_btn_box py-3 text-center'>
                <Button className="apply_filter_btn px-5" onClick={generateFilterEvent}>Aplicar Filtro</Button>
            </div>
        </div>
    )
}