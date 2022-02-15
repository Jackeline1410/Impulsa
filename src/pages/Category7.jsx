import React from 'react';
import {Container, Row, Col} from 'react-grid';
import Header from '../components/Header';
import Footer from '../components/Footer';

import '../styles/Category7.scss';
import logofema from '../assets/logos/fema.jpeg';
import logoaic from '../assets/logos/aic.png';
import logomardel from '../assets/logos/mardel.jpeg';


const Category7 = () => {
    return(
        <div>
            <Header className="header"/>
            <h1 className="titleCategory7">Infraestructura y Construcción</h1>
            <p className="paragraphCategory1">A continuación encontrarás el listado de emprendimientos registrados en esta categoría:</p>
            <Container className="containercategory1">
                    <Row>
                        <Col md={4} className="columncategory1">
                        <img className="logocategory1properties" src={logofema} alt="logo fema" />
                        
                        </Col>
                        <Col md={4} className="columncategory1">
                        <img className="logocategory1properties" src={logoaic} alt="logo aic" />
                       
                        </Col>
                        <Col md={4} className="columncategory1">
                        <img className="logocategory1properties" src={logomardel} alt="logo mardel" />
                       
                        </Col>

                    </Row>
                        
                        
                    <Row>
                        <Col md={4} className="columncategory1">
                        <p className="paragraphCategory1entrepreneur1">FEMA</p>
                        </Col>

                        <Col md={4} className="columncategory1">
                        <p className="paragraphCategory1entrepreneur1">AIC</p>
                        </Col>

                        <Col md={4} className="columncategory1">
                        <p className="paragraphCategory1entrepreneur1">MARDEL</p>
                        </Col>

                    </Row>

                </Container>
            <Footer />
        </div>
    );
}

export default Category7;