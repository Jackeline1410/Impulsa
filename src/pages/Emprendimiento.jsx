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
        <div>
            <Header className="header"/>
            <div>
            <h2 className="titleentrepreneur">Emprendimiento destacado</h2>
            </div>

            <Row className="logoemprendimiento">
            <img className="logoid3co" src={logoid3co} alt="logoid3co" />
            </Row>

            <h5 className="subtitleentrepreneur">Decoración para el hogar y fiestas</h5>
        
                <Col>
                    <Row className="rowentrepreneur">
                        <img className="locationentrepreneur" src={location} alt="location"/>
                        <div className="dataentrepreneur"><strong>BUCARAMANGA, SANTANDER</strong></div>
                        <img className="flechaentrepreneur" src={flecha} alt="flecha" />
                        <div className="dataentrepreneur"><strong>ENVÍOS NACIONALES</strong></div>
                    </Row>
                </Col>
           
        
            <div>
            <p className="paragraphentrepreneur">Hola somos Id3co, nos dedicamos a elaborar productos que darán estilo y creatividad a los espacios de tu hogar como oficina rincón green, rincón de lectura y espacios infantiles. Tenemos ilustraciones, materas, artículos deco infantil; además podrás encontrar anchetas de regalo que harán más fácil la experiencia de dar un detalle a los que más quieres. Para celebrar tenemos kits temáticos para todas las fechas especiales, cumpleaños, navidad, etc. Tenemos envíos a todo el país, despachamos desde Medellín. Te invitamos a seguirnos y a conocer todos nuestros productos.</p>

                <Container className="container">

                    <div className="cardentrepreneur">
                        <img className="photoentrepreneur" src={matera} alt="matera" />
                        <p className="informationentrepreneur"><strong>Matera abstracta</strong></p>
                    </div>

                    <div className="cardentrepreneur">
                        <img className="photoentrepreneur" src={materainfantil} alt="matera infantil" />
                        <p className="informationentrepreneur"><strong>Matera infantil</strong></p>
                    </div>
                                
                    <div className="cardentrepreneur">
                        <img className="photoentrepreneur" src={setescritorio} alt="set de escritorio" />
                        <p className="informationentrepreneur"><strong>Set escritorio infantil</strong></p>       
                    </div>

                    <div className="cardentrepreneur">
                        <img className="photoentrepreneur" src={kidbasket} alt="cesta niños" />
                        <p className="informationentrepreneur"><strong>Cesta niños</strong></p>
                    </div>

                    <div className="cardentrepreneur">
                        <img className="photoentrepreneur" src={babybasket} alt="cesta niños" />
                        <p className="informationentrepreneur"><strong>Cesta bebés</strong></p>
                    </div>

                    <div className="cardentrepreneur">
                        <img className="photoentrepreneur" src={recordatorios} alt="cesta niños" />
                        <p className="informationentrepreneur"><strong>Recordatorios</strong></p>
                    </div>
                            
                </Container>

            <p className="paragraphentrepreneur">Nuestros productos son personalizados y de acuerdo a la tematica elegida podemos estimar un precio para cada uno de ellos. Pregunta por el que sea de tu interés</p>

                <Col>
                    <Row className="rowentrepreneur">
                        <img className="faceentrepreneur" src={iconfb} alt="location"/>
                        <div className="namefbentrepreneur">ID3CO</div>
                        <img className="instaentrepreneur" src={iconinsta} alt="flecha" />
                        <div className="nameinstaentrepreneur">@id3co</div>
                        <img className="callentrepreneur" src={iconcall} alt="flecha" />
                        <div className="numberentrepreneur">+57 3168650648</div>
                    </Row>
                </Col>

                <div className="contenedor">
                    <img className="reproductor" src={iconYou} alt="icon youtube" />
                </div>

            </div>
            
            <Footer />
        </div>

    );
}

export default Emprendimiento;
