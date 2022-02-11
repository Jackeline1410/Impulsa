import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {Container, Row, Col} from 'react-grid';

import '../styles/Category1.scss';
import logoid3co from '../assets/logos/logoid3co.svg'

const Category1 = () => {
    return(
        <div >
            
                <Header className="header"/>
                <h1 className="titleCategory1">Accesorios y Joyería</h1>
                <p className="paragraphCategory1">A continuación encontrarás el listado de emprendimientos registrados en esta categoría:</p>
                <Container className="containercategory1">
                    <Row>
                        <Col md={4} className="columncategory1">
                        <img className="logoid3coproperties" src={logoid3co} alt="logoid3co" />
                        
                        </Col>
                        <Col md={4} className="columncategory1">
                        <img className="logoid3coproperties" src={logoid3co} alt="logoid3co" />
                       
                        </Col>
                        <Col md={4} className="columncategory1">
                        <img className="logoid3coproperties" src={logoid3co} alt="logoid3co" />
                       
                        </Col>

                    </Row>
                        
                        
                    <Row>
                        <Col md={4} className="columncategory1">
                        <p className="paragraphCategory1entrepreneur1">id3co</p>
                        </Col>

                        <Col md={4} className="columncategory1">
                        <p className="paragraphCategory1entrepreneur1">id3co</p>
                        </Col>

                        <Col md={4} className="columncategory1">
                        <p className="paragraphCategory1entrepreneur1">id3co</p>
                        </Col>

                    </Row>

                </Container>
                
                <Footer />
                
        </div>
    );
}

export default Category1;