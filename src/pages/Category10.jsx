import React from 'react';
import {Container, Row, Col} from 'react-grid';
import Header from '../components/Header';
import Footer from '../components/Footer';

import '../styles/Category3.scss';
import logorebelion from '../assets/logos/rebelion.jpeg';
import logoarepiz from '../assets/logos/arepiz.png';
import logoconarte from '../assets/logos/conarte.jpeg';

const Category10 = () => {
    return(
        <div>
            <Header className="header"/>
            <h1 className="titleCategory3">Restaurantes y Alimentación</h1>
            <p className="paragraphCategory1">A continuación encontrarás el listado de emprendimientos registrados en esta categoría:</p>
            <Container className="containercategory1">
                    <Row>
                        <Col md={4} className="columncategory1">
                        <img className="logocategory1properties" src={logorebelion} alt="logo la rebelion" />
                        
                        </Col>
                        <Col md={4} className="columncategory1">
                        <img className="logocategory1properties" src={logoarepiz} alt="logo arepiz" />
                       
                        </Col>
                        <Col md={4} className="columncategory1">
                        <img className="logocategory1properties" src={logoconarte} alt="logo con arte" />
                       
                        </Col>

                    </Row>
                        
                        
                    <Row>
                        <Col md={4} className="columncategory1">
                        <p className="paragraphCategory1entrepreneur1">LA REBELION</p>
                        </Col>

                        <Col md={4} className="columncategory1">
                        <p className="paragraphCategory1entrepreneur1">AREPIZ</p>
                        </Col>

                        <Col md={4} className="columncategory1">
                        <p className="paragraphCategory1entrepreneur1">CON ARTE</p>
                        </Col>

                    </Row>

                </Container>
            <Footer />
        </div>
    );
}

export default Category10;