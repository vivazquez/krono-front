import React, { useEffect, useState } from 'react';
import { Row, Col, Container  } from 'react-bootstrap';
import { Sliders } from 'react-bootstrap-icons';
import Filter from '../components/filter/Filter';
import ProductsGrid from '../components/layout/ProductsGrid';
import { getCollections } from '../service/Service';
import SpinBox from '../components/spinner/SpinBox';
import EventEmitter from '../utils/EventEmitter';


export default function Gemas() {  
    const [showFilter, setShowFilter] = useState(true);
    const [allGroups, setAllGroups] = useState([]);
    const [allItems, setAllItems] = useState([]);
    const [nameFilter, setNameFilter] = useState([]);
    const [cutFilter, setCutFilter] = useState([]);
    const [colorFilter, setColorFilter] = useState([]);
    const [applyFilter, setApplyFilter] = useState(false);
    const [str, setStr] = useState("");

    useEffect(()=>{
        getCollectionsData();
        
    },[]);
    
    const doCollectionFilterHandler = (cut, color) => {
        setApplyFilter(true);
        setStr("");
        if(cut !="" && color != ""){
            allItems.map((item) => {
                if(item.cut == cut && item.color == color){
                    setStr(current => (current + item.name + "|"))
                }
            });
        }
        if(cut !="" && color == ""){
            allItems.map((item) => {
                if(item.cut == cut){
                    setStr(current => (current + item.name + "|"))
                }
            });
        }
        if(cut =="" && color != ""){
            allItems.map((item) => {
                if(item.color == color){
                    setStr(current => (current + item.name + "|"))
                }
            });
        }
    }
    const listener = EventEmitter.addListener('doCollectionFilter', doCollectionFilterHandler);

    const getCollectionsData = async () => {
        const data = await getCollections();
        setAllGroups([...data.groups]);
        setAllItems([...data.items]);
        setNameFilter([...data.filters.name]);
        setCutFilter([...data.filters.cut]);
        setColorFilter([...data.filters.color]);
    };

    const hideFilterHandler = (e) => {
        e.preventDefault();
        if(showFilter){
            setShowFilter(false);
        } else {
            setShowFilter(true);
        }
    };

    return (
        <Container className='py-5'>
            <Row className='pb-3'>
                <Col>
                    <div className='filter_hide'>
                        <a onClick={hideFilterHandler}><span className='pr-3'>Ocultar filtros</span><Sliders /></a>
                    </div>
                </Col>
            </Row>
            {
                allGroups.length>1 ? (
                    showFilter ? (
                        <Row>
                            <Col lg={3} className=''>
                                <Filter name_filter={nameFilter} cut_filter={cutFilter} color_filter={colorFilter}/>
                            </Col>
                            <Col lg={9}>
                                <ProductsGrid products={allGroups} names={str} apply_filter={applyFilter} />
                            </Col>
                        </Row>
                    ) : (
                        <Row>
                            <Col lg={12}>
                                <ProductsGrid products={allGroups} names={str} apply_filter={applyFilter} />
                            </Col>
                        </Row>
                    )

                ) : (
                    <SpinBox/>
                )
            }
        </Container>
    )
}