import React from 'react';
import {Container, Col, Row } from 'react-grid';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/Emprendimiento.scss';
import logoid3co from '../assets/logos/logoid3co.svg';
import flecha from '../assets/icons/flecha.svg';
import location from '../assets/icons/location.svg';
import { Link } from 'react-router-dom';

const Emprendimiento = () => {
    return(
        <Container>
            <Header className="header"/>
            <div className="mainContainer">
            <h2 className="title">Emprendimiento destacado</h2>
            </div>

            <Row className="logoemprendimiento">
            <img className="logoid3co" src={logoid3co} alt="logoid3co" />
            </Row>

            <h5 className="subtitle">Decoración para el hogar y fiestas</h5>
            

                
            <Row>
                <Col>    
                    <img className="location" src={location} alt="location"/>
                </Col>
                <Col md={4}>
                    <p className="data"><strong>BUCARAMANGA, SANTANDER</strong></p>
                </Col>
            
                <Col md={2}>
                    <img className="flecha" src={flecha} alt="flecha" />
                </Col>
                <Col md={4}>
                    <p className="data"><strong>ENVÍOS NACIONALES</strong></p>
                </Col>
                
            </Row>
        
            <div>
            <p className="paragraph">Hola somos Id3co, nos dedicamos a elaborar productos que darán estilo y creatividad a los espacios de tu hogar como oficina rincón green, rincón de lectura y espacios infantiles. Tenemos ilustraciones, materas, artículos deco infantil; además podrás encontrar anchetas de regalo que harán más fácil la experiencia de dar un detalle a los que más quieres. Para celebrar tenemos kits temáticos para todas las fechas especiales, cumpleaños, navidad, etc. Tenemos envíos a todo el país, despachamos desde Medellín. Te invitamos a seguirnos y a conocer todos nuestros productos.</p>
            <p className="paragraph">Nuestros productos son personalizados y de acuerdo a la tematica elegida podemos estimar un precio para cada uno de ellos. Pregunta por el que sea de tu interés</p>
            </div>
            <Footer />
        </Container>

    );
}

export default Emprendimiento;
