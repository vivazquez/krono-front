import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import logo from '../../assets/img/logo.png';
import { Telephone, GeoAlt, Search, Cart2, Person } from 'react-bootstrap-icons';

export default function Header() {
  
  return (
    <header>
      <Container>
      <Row className='py-3'>
        <Col sm={2} className="header_part1 py-2">
            <a className="nav-link pr-4" href="tel:332 959 7262"><Telephone /></a>
            <a className="nav-link px-4" href="#"><GeoAlt /></a>
        </Col>
        <Col sm={8} className="">
          <div className='text-center'><a className="navbar-brand" href="/"><img src={logo} width="100px"/></a></div>
          <nav className="navbar navbar-expand-lg">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse text-center" id="navbarText">
              <ul className="navbar-nav mr-auto text-center">
                <li className="nav-item">
                  <a className="nav-link px-4" href="/gemas">Gemas</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link px-4" href="#">Gemas Premium</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link px-4" href="#">Inventario</a>
                </li>
              </ul>
            </div>
          </nav>
        </Col>
        <Col sm={2} className="header_part3 py-2">
            <a className="nav-link px-4" href="#"><Search /></a>
            <a className="nav-link px-4" href="#"><Cart2 /></a>
            <a className="nav-link pl-4" href="#"><Person /></a>
        </Col>
      </Row>
      </Container>
    </header>
    
  )
}