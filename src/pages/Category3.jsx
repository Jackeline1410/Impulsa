import React from 'react';
import {Container, Row, Col} from 'react-grid';
import Header from '../components/Header';
import Footer from '../components/Footer';

import '../styles/Category3.scss';
import logoid3co from '../assets/logos/logoid3co.svg';
import logocanela from '../assets/logos/canela.jpg';
import logonewdecor from '../assets/logos/newdecor.jpeg';

const Category3 = () => {
    return(
        <div>
            <Header className="header" />
            <h1 className="titleCategory3">Detalles y Decoración</h1>
            <p className="paragraphCategory1">A continuación encontrarás el listado de emprendimientos registrados en esta categoría:</p>
            <Container className="containercategory1">
                    <Row>
                        <Col md={4} className="columncategory1">
                        <img className="logocategory1properties" src={logocanela} alt="logo canela" />
                        
                        </Col>
                        <Col md={4} className="columncategory1">
                        <img className="logocategory1properties" src={logoid3co} alt="logo id3co" />
                       
                        </Col>
                        <Col md={4} className="columncategory1">
                        <img className="logocategory1properties" src={logonewdecor} alt="logo newdecor" />
                       
                        </Col>

                    </Row>
                        
                        
                    <Row>
                        <Col md={4} className="columncategory1">
                        <p className="paragraphCategory1entrepreneur1">CANELA</p>
                        </Col>

                        <Col md={4} className="columncategory1">
                        <p className="paragraphCategory1entrepreneur1">ID3CO</p>
                        </Col>

                        <Col md={4} className="columncategory1">
                        <p className="paragraphCategory1entrepreneur1">NEW DECOR</p>
                        </Col>

                    </Row>

                </Container>
            <Footer />
        </div>
    );
}

export default Category3;