import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Row, Col, Container  } from 'react-bootstrap';
import { Sliders } from 'react-bootstrap-icons';
import AdvancedFilter from '../components/filter/AdvancedFilter';
import ProductsGrid2 from '../components/layout/ProductsGrid2';
import { getCollections } from '../service/Service';
import SpinBox from '../components/spinner/SpinBox';
import EventEmitter from '../utils/EventEmitter';


export default function CollectoinDetail() {  
    const params = useParams();
    const { collection_name } = params;
    const [showFilter, setShowFilter] = useState(true);
    const [products, setProducts] = useState([]);
    const [nameFilter, setNameFilter] = useState([]);
    const [cutFilter, setCutFilter] = useState([]);
    const [colorFilter, setColorFilter] = useState([]);
    const [flag, setFlag] = useState(true);

    useEffect(()=>{
        getProductsData();
        
        
    },[]);
    const doFilterHandler = async ( cut, color, size, price) => {
        const data1 = await getCollections();
        setFlag(false);
        if(cut !== "" && color !== "" && size !== "" && price !== ""){
            const result = data1.items.filter((item) =>  {
                return (
                  item.name === collection_name &&
                  item.cut === cut &&
                  item.color === color
                )
              });
            setProducts([...result]);
        }
        if(cut === "" && color === "" && size === "" && price === ""){
            const result = data1.items.filter((item) =>  {
                return (
                  item.name === collection_name
                )
              });
            setProducts([...result]);
        }
        // 1 empty
        if(cut !== "" && color !== "" && size !== "" && price === ""){

        }
        if(cut !== "" && color !== "" && size === "" && price !== ""){

        }
        if(cut !== "" && color !== "" && size === "" && price !== ""){

        }
        if(cut !== "" && color === "" && size !== "" && price !== ""){

        }
        if(cut === "" && color !== "" && size !== "" && price !== ""){

        }
        //2 empty
        if(cut !== "" && color !== "" && size === "" && price === ""){
            const result = data1.items.filter((item) =>  {
                return (
                  item.name === collection_name &&
                  item.cut === cut &&
                  item.color === color
                )
              });
            setProducts([...result]);
        }
        if(cut !== "" && color === "" && size !== "" && price === ""){

        }
        if(cut === "" && color !== "" && size !== "" && price === ""){

        }
        if(cut !== "" && color === "" && size === "" && price !== ""){

        }
        if(cut === "" && color === "" && size !== "" && price !== ""){

        }
        if(cut === "" && color !== "" && size === "" && price !== ""){

        }

        //3 empty
        if(cut !== "" && color === "" && size === "" && price === ""){
            const result = data1.items.filter((item) =>  {
                return (
                  item.name === collection_name &&
                  item.cut === cut
                )
              });
            setProducts([...result]);
        }
        if(cut === "" && color !== "" && size === "" && price === ""){
            const result = data1.items.filter((item) =>  {
                return (
                  item.name === collection_name &&
                  item.color === color
                )
              });
            setProducts([...result]);
        }
        if(cut === "" && color === "" && size !== "" && price === ""){

        }
        if(cut === "" && color === "" && size === "" && price !== ""){

        }
        
    }
    const listener = EventEmitter.addListener('doFilter', doFilterHandler);
    const getProductsData = async () => {
        const data = await getCollections();
        const collection_products = data.items.filter((item) => item.name == collection_name);
        setProducts([...collection_products]);
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
    //console.log(products)
    return (
        <Container className='py-5'>
            <Row className='pb-3'>
                <Col sm={12} className='pb-3'>
                    <div className='green-color text-center'>
                        <h3>{collection_name}</h3>
                    </div>
                </Col>
                <Col sm={12}>
                    <div className='filter_hide'>
                        <a onClick={hideFilterHandler}><span className='pr-3'>Ocultar filtros</span><Sliders /></a>
                    </div>
                </Col>
            </Row>
            {
                products.length>=1 ? (
                    showFilter ? (
                        <Row>
                            <Col lg={3} className=''>
                                <AdvancedFilter name_filter={nameFilter} cut_filter={cutFilter} color_filter={colorFilter} />
                            </Col>
                            <Col lg={9}>
                                <ProductsGrid2 products={products}/>
                            </Col>
                        </Row>
                    ) : (
                        <Row>
                            <Col lg={12}>
                                <ProductsGrid2 products={products}/>
                            </Col>
                        </Row>
                    )

                ) : (
                    flag ? (
                        <SpinBox/>
                    ) : (
                        <div className='text-center'>No Result.</div>
                    )
                    
                )
            }
        </Container>
    )
}