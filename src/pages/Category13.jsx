import React from 'react';
import {Container, Row, Col} from 'react-grid';
import Header from '../components/Header';
import Footer from '../components/Footer';

import '../styles/Category6.scss';
import logolerni from '../assets/logos/lerni.jpeg';
import logoagora from '../assets/logos/agora.jpeg';
import logomilton from '../assets/logos/milton.jpeg';

const Category13 = () => {
    return(
        <div>
            <Header className="header"/>
            <h1 className="titleCategory6">Tutorías o Asesorías académicas</h1>
            <p className="paragraphCategory1">A continuación encontrarás el listado de emprendimientos registrados en esta categoría:</p>
            <Container className="containercategory1">
                    <Row>
                        <Col md={4} className="columncategory1">
                        <img className="logocategory1properties" src={logolerni} alt="logo lerni" />
                        
                        </Col>
                        <Col md={4} className="columncategory1">
                        <img className="logocategory1properties" src={logoagora} alt="logo agora" />
                       
                        </Col>
                        <Col md={4} className="columncategory1">
                        <img className="logocategory1properties" src={logomilton} alt="logo milton" />
                       
                        </Col>

                    </Row>
                        
                        
                    <Row>
                        <Col md={4} className="columncategory1">
                        <p className="paragraphCategory1entrepreneur1">LERNI</p>
                        </Col>

                        <Col md={4} className="columncategory1">
                        <p className="paragraphCategory1entrepreneur1">AGORA</p>
                        </Col>

                        <Col md={4} className="columncategory1">
                        <p className="paragraphCategory1entrepreneur1">MILTON</p>
                        </Col>

                    </Row>

                </Container>
            <Footer />
        </div>
    );
}

export default Category13;