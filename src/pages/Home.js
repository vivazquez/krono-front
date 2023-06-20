import React, { useEffect, useState } from 'react';
import { Row, Col  } from 'react-bootstrap';
import SpinBox from '../components/spinner/SpinBox';
import { getImgs } from '../service/Service';
import SliderBox from '../components/slider/SliderBox';

export default function Home() {  
    const [sliders, setSliders] = useState([]);
    useEffect(()=>{
        getSliderImgs();
    },[]);

    const getSliderImgs = async () => {
        const data = await getImgs();
        setSliders([...data]);
    };

    return (
        <Row>
            <Col  className="">
                {
                    sliders.length ? (
                        <SliderBox sliders={sliders}/>
                    ) : (
                        <SpinBox/>       
                    )              
            }
            </Col>
        </Row>
        
    )
}