import React from 'react';
import {Container, Row, Col} from 'react-grid';
import Header from '../components/Header';
import Footer from '../components/Footer';

import '../styles/Category6.scss';
import logobabyfresh from '../assets/logos/babyfresh.jpeg';
import logocarvajal from '../assets/logos/carvajal.jpeg';
import logocalzadomonica from '../assets/logos/monica.jpeg';


const Category6 = () => {
    return(
        <div>
            <Header className="header"/>
            <h1 className="titleCategory6">Fabricación de Textiles y Calzado</h1>
            <p className="paragraphCategory1">A continuación encontrarás el listado de emprendimientos registrados en esta categoría:</p>
            <Container className="containercategory1">
                    <Row>
                        <Col md={4} className="columncategory1">
                        <img className="logocategory1properties" src={logobabyfresh} alt="logo baby fresh" />
                        
                        </Col>
                        <Col md={4} className="columncategory1">
                        <img className="logocategory1properties" src={logocarvajal} alt="logo deportivos carvajal" />
                       
                        </Col>
                        <Col md={4} className="columncategory1">
                        <img className="logocategory1properties" src={logocalzadomonica} alt="logo calzado monica" />
                       
                        </Col>

                    </Row>
                        
                        
                    <Row>
                        <Col md={4} className="columncategory1">
                        <p className="paragraphCategory1entrepreneur1">BABY FRESH</p>
                        </Col>

                        <Col md={4} className="columncategory1">
                        <p className="paragraphCategory1entrepreneur1">DEPORTIVOS CARVAJAL</p>
                        </Col>

                        <Col md={4} className="columncategory1">
                        <p className="paragraphCategory1entrepreneur1">CALZADO MONICA</p>
                        </Col>

                    </Row>

                </Container>
            <Footer />
        </div>
    );
}

export default Category6;