import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {Container, Row, Col} from 'react-grid';

import '../styles/Category1.scss';
import logokevins from '../assets/logos/kevins.jpeg';
import logothifany from '../assets/logos/thifany.jpeg';
import logovera from '../assets/logos/vera.jpeg';

const Category1 = () => {
    return(
        <div >
            
                <Header className="header"/>
                <h1 className="titleCategory1">Accesorios y Joyería</h1>
                <p className="paragraphCategory1">A continuación encontrarás el listado de emprendimientos registrados en esta categoría:</p>
                <Container className="containercategory1">
                    <Row>
                        <Col md={4} className="columncategory1">
                        <img className="logocategory1properties" src={logokevins} alt="logo kevins" />
                        
                        </Col>
                        <Col md={4} className="columncategory1">
                        <img className="logocategory1properties" src={logovera} alt="logo vera" />
                       
                        </Col>
                        <Col md={4} className="columncategory1">
                        <img className="logocategory1properties" src={logothifany} alt="logo thifany" />
                       
                        </Col>

                    </Row>
                        
                        
                    <Row>
                        <Col md={4} className="columncategory1">
                        <p className="paragraphCategory1entrepreneur1">KEVIN'S</p>
                        </Col>

                        <Col md={4} className="columncategory1">
                        <p className="paragraphCategory1entrepreneur1">VERA</p>
                        </Col>

                        <Col md={4} className="columncategory1">
                        <p className="paragraphCategory1entrepreneur1">THIFANY</p>
                        </Col>

                    </Row>

                </Container>
                
                <Footer />
                
        </div>
    );
}

export default Category1;