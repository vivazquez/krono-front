import { Container, Row, Col } from 'react-bootstrap';
import facebook from '../../assets/img/facebook.png';
import instagram from '../../assets/img/instagram.png';
import email from '../../assets/img/email.png';

export default function Footer() {

    return (
        <footer >
            <Container fluid className='footer-line'></Container>
            <Container className='py-4'>
                <Row>
                    <Col sm={3} className=''>
                        <div className="footer-part1" >
                            <a className="nav-link px-1 py-2 green-color" href="#">Nuestra empresa</a>
                            <a className="nav-link px-1 py-2" href="#">Orígenes</a>
                            <a className="nav-link px-1 py-2" href="#">Póliticas del sitio web</a>
                        </div>
                    </Col>
                    <Col sm={6} className=''>
                        <div className="text-center" >
                            <span className="nav-link px-4 py-2 green-color">Síguenos</span>
                            <div className='footer-social py-3'>
                                <a className="nav-link px-2" href="tel:332 959 7262"><img src={facebook} width="68px"/></a>
                                <a className="nav-link px-2" href="#"><img src={instagram} width="68px"/></a>
                                <a className="nav-link px-2" href="#"><img src={email} width="68px"/></a>
                            </div>
                            <a className="nav-link px-4 py-2 green-color korno-2022" href="#">KORNO 2022</a>
                            <span className="nav-link px-4 pb-3">Guadalajara, Jalisco. México.</span>
                        </div>
                    </Col>
                    <Col sm={3} className='footer-part3-col'>
                        <div className="footer-part3" >
                            <a className="nav-link px-1 py-2 green-color" href="#">Servicio al cliente</a>
                            <a className="nav-link px-1 py-2" href="#">Agenda tu cita</a>
                            <a className="nav-link px-1 py-2" href="#">Contáctenos</a>
                            <a className="nav-link px-1 py-2" href="#">Whatsapp</a>
                            <a className="nav-link px-1 py-2" href="#">Preguntas frecuentes</a>
                        </div>
                    </Col>
                </Row>
            
            </Container>           
        </footer>
    )
}