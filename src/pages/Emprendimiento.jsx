import React from 'react';
import {Container, Col, Row } from 'react-grid';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/Emprendimiento.scss';
import logoid3co from '../assets/logos/logoid3co.svg';
import flecha from '../assets/icons/flecha.svg';
import location from '../assets/icons/location.svg';

const Emprendimiento = () => {
    return(
        <Container>
            <Header className="header"/>
            <div className="mainContainer">
            <h2 className="title">Emprendimiento destacado</h2>
            <img className="logoid3co" src={logoid3co} alt="logoid3co" />
            <h5 className="subtitle">Decoración para el hogar y fiestas</h5>
            <Row className="row">
                <Col>
                    <img className="location" src={location} alt="location"/>
                </Col>
                <Col>
                    <p className="data">BUCARAMANGA, SANTANDER</p>
                </Col>

                <Col>
                    <img className="flecha" src={flecha} alt="flecha" />
                </Col>
                <Col>
                    
                    <p className="data">ENVÍOS NACIONALES</p>
                </Col>

            </Row>
        
            <p className="paragraph">Hola somos Id3co, nos dedicamos a elaborar productos que darán estilo y creatividad a los espacios de tu hogar como oficina rincón green, rincón de lectura y espacios infantiles. Tenemos ilustraciones, materas, artículos deco infantil; además podrás encontrar anchetas de regalo que harán más fácil la experiencia de dar un detalle a los que más quieres. Para celebrar tenemos kits temáticos para todas las fechas especiales, cumpleaños, navidad, etc. Tenemos envíos a todo el país, despachamos desde Medellín. Te invitamos a seguirnos y a conocer todos nuestros productos.</p>
            <p className="paragraph">Nuestros productos son personalizados y de acuerdo a la tematica elegida podemos estimar un precio para cada uno de ellos. Pregunta por el que sea de tu interés</p>
            </div>
            <Footer />
        </Container>

    );
}

export default Emprendimiento;
