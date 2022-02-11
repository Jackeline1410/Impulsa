import React from 'react';
import { Link } from 'react-router-dom';
import {Row, Col, Container} from 'react-grid';

import iconNote from '../assets/icons/iconNote.svg';
import iconCheck from '../assets/icons/iconCheck.svg';

import '../styles/FormCompanythird.scss';

const FormCompanythird = () => {
    return(
        <div>
            <Container>
                <form action="/" className="formcompanythird">
                    <Row>
                        <label for="youtube" className="label">Youtube (enlace con video descriptivo de su emprendimiento):</label>
                    </Row>

                    <Row>
                        <textarea className="textareaformcompanythird" size="60"></textarea>
                    </Row>

                    <Row>
                        <label for="portfolio" className="label">Portafolio (enlace del drive o plataforma de sus productos):</label>
                    </Row>

                    <Row>
                        <textarea className="textareaformcompanythird"></textarea>
                    </Row>

                    <Row>
                        <Col md={4} className="columnformcompanysthird">
                            <label for="autorization" className="label">Autorizo el uso de mis datos personales:</label>
                    
                            <img className="iconCheckproperties" src={iconCheck} alt="iconCheck" />
                        </Col>
                    </Row>

                    <Row>
                        <Col md={4} className="columnformcompanysthird">
                            <label for="politiqueprivate" className="label">He leído y autorizo la politica de privacidad:</label>
                        </Col>
                        <Col md={4} className="columnformrigthcompanysthird">
                            <img className="iconCheckproperties" src={iconCheck} alt="iconCheck" />
                            <img className="iconNoteproperties" src={iconNote} alt="iconNote" />
                        </Col>
                    </Row>

                    <p className="paragraphformcompanythird">Gracias por suministrar los datos y querer hacer parte de la familia de Impulsa UIS, pronto nos comunicaremos con usted por medio del correo electrónico diligenciado para notificarle si sus datos son válidos para ser publicados.</p>

                    <Row className="rowbuttons">
                    
                        <Link to="/RegisterCompany2">
                                
                        <button className="primary-button">REGRESAR</button>
                                
                        </Link>
                   <Col md={2}></Col>
                        <Link to="/Perfil">
                                
                                <button className="primary-button">GUARDAR</button>
                                
                        </Link>
                    </Row>

                </form>
            </Container>
        </div>
    );
}

export default FormCompanythird;