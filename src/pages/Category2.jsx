import React from 'react';
import {Container, Row, Col} from 'react-grid';
import Header from '../components/Header';
import Footer from '../components/Footer';

import logodoterra from '../assets/logos/doterra.jpeg';
import logosweetie from '../assets/logos/sweetie.jpg';
import logomilagros from '../assets/logos/milagros.jpeg';
import '../styles/Category2.scss';

const Category2 = () => {
    return(
        <div>
            <Header className="header"/>
            <h1 className="titleCategory2">Salud y Belleza</h1>
            <p className="paragraphCategory1">A continuación encontrarás el listado de emprendimientos registrados en esta categoría:</p>
            <Container className="containercategory1">
                    <Row>
                        <Col md={4} className="columncategory1">
                        <img className="logocategory1properties" src={logomilagros} alt="logo milagros" />
                        
                        </Col>
                        <Col md={4} className="columncategory1">
                        <img className="logocategory1properties" src={logosweetie} alt="logo sweetie" />
                       
                        </Col>
                        <Col md={4} className="columncategory1">
                        <img className="logocategory1properties" src={logodoterra} alt="logo doterra" />
                       
                        </Col>

                    </Row>
                        
                        
                    <Row>
                        <Col md={4} className="columncategory1">
                        <p className="paragraphCategory1entrepreneur1">MILAGROS</p>
                        </Col>

                        <Col md={4} className="columncategory1">
                        <p className="paragraphCategory1entrepreneur1">SWEETIE</p>
                        </Col>

                        <Col md={4} className="columncategory1">
                        <p className="paragraphCategory1entrepreneur1">doTERRA</p>
                        </Col>

                    </Row>

                </Container>
                
            <Footer />
        </div>
    );
}

export default Category2;