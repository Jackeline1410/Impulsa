import React from 'react';
import {Container, Col, Row } from 'react-grid';
import Header from '../components/Header';
import Footer from '../components/Footer';


import logoid3co from '../assets/logos/logoid3co.svg';
import flecha from '../assets/icons/flecha.svg';
import location from '../assets/icons/location.svg';
import matera from '../assets/images/matera.svg';
import materainfantil from '../assets/images/materainfantil.svg';
import recordatorios from '../assets/images/recordatorios.svg';
import setescritorio from '../assets/images/setescritorio.svg';
import kidbasket from '../assets/images/kidbasket.svg';
import babybasket from '../assets/images/babybasket.svg';
import iconcall from '../assets/icons/iconcall.svg';
import iconfb from '../assets/icons/iconfb.svg';
import iconinsta from '../assets/icons/iconinsta.svg';
import iconYou from '../assets/icons/iconYou.svg';
import '../styles/Emprendimiento.scss';


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
        
                <Col>
                    <Row className="row">
                        <img className="location" src={location} alt="location"/>
                        <div className="data"><strong>BUCARAMANGA, SANTANDER</strong></div>
                        <img className="flecha" src={flecha} alt="flecha" />
                        <div className="data"><strong>ENVÍOS NACIONALES</strong></div>
                    </Row>
                </Col>
           
        
            <div>
            <p className="paragraph">Hola somos Id3co, nos dedicamos a elaborar productos que darán estilo y creatividad a los espacios de tu hogar como oficina rincón green, rincón de lectura y espacios infantiles. Tenemos ilustraciones, materas, artículos deco infantil; además podrás encontrar anchetas de regalo que harán más fácil la experiencia de dar un detalle a los que más quieres. Para celebrar tenemos kits temáticos para todas las fechas especiales, cumpleaños, navidad, etc. Tenemos envíos a todo el país, despachamos desde Medellín. Te invitamos a seguirnos y a conocer todos nuestros productos.</p>

                <Container className="container">

                    <div className="card">
                        <img className="photo" src={matera} alt="matera" />
                        <p className="information"><strong>Matera abstracta</strong></p>
                    </div>

                    <div className="card">
                        <img className="photo" src={materainfantil} alt="matera infantil" />
                        <p className="information"><strong>Matera infantil</strong></p>
                    </div>
                                
                    <div className="card">
                        <img className="photo" src={setescritorio} alt="set de escritorio" />
                        <p className="information"><strong>Set escritorio infantil</strong></p>       
                    </div>

                    <div className="card">
                        <img className="photo" src={kidbasket} alt="cesta niños" />
                        <p className="information"><strong>Cesta niños</strong></p>
                    </div>

                    <div className="card">
                        <img className="photo" src={babybasket} alt="cesta niños" />
                        <p className="information"><strong>Cesta bebés</strong></p>
                    </div>

                    <div className="card">
                        <img className="photo" src={recordatorios} alt="cesta niños" />
                        <p className="information"><strong>Recordatorios</strong></p>
                    </div>
                            
                </Container>

            <p className="paragraph">Nuestros productos son personalizados y de acuerdo a la tematica elegida podemos estimar un precio para cada uno de ellos. Pregunta por el que sea de tu interés</p>

                <Col>
                    <Row className="row">
                        <img className="location" src={iconfb} alt="location"/>
                        <div className="data"><strong>ID3CO</strong></div>
                        <img className="flecha" src={iconinsta} alt="flecha" />
                        <div className="data"><strong>@id3co</strong></div>
                        <img className="flecha" src={iconcall} alt="flecha" />
                        <div className="data"><strong>+57 3168650648</strong></div>
                    </Row>
                </Col>

                <div className="contenedor">
                    <img className="reproductor" src={iconYou} alt="icon youtube" />
                </div>

            </div>
            
            <Footer />
        </Container>

    );
}

export default Emprendimiento;
