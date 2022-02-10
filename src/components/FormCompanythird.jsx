import React from 'react';
import { Link } from 'react-router-dom';
import {Row, Col} from 'react-grid';

import iconNote from '../assets/icons/iconNote.svg';
import iconCheck from '../assets/icons/iconCheck.svg';

const FormCompany3 = () => {
    return(
        <div>
            <form action="/" className="form">
                    <Row>
                        <label for="youtube" className="label">Youtube (enlace con video descriptivo de su emprendimiento):</label>
                    </Row>
                    <Row>
                        <textarea></textarea>
                    </Row>

                    <Row>
                        <label for="portfolio" className="label">Portafolio (enlace del drive o plataforma de sus productos):</label>
                    </Row>
                    <Row>
                        <textarea></textarea>
                    </Row>

                    <Row>
                        <Col md={4}>
                            <label for="autorization" className="label">Autorizo el uso de mis datos personales:</label>
                        </Col>
                        <Col md={4}>
                            <img src={iconCheck} alt="iconCheck" />
                        </Col>
                    </Row>

                    <Row>
                        <Col md={4}>
                            <label for="politiqueprivate" className="label">He leído y autorizo la politica de privacidad:</label>
                        </Col>
                        <Col md={4}>
                            <img src={iconCheck} alt="iconCheck" />
                        </Col>
                        <Col md={4}>
                            <img src={iconNote} alt="iconNote" />
                        </Col>
                    </Row>

                    <p>Gracias por suministrar los datos y querer hacer parte de la familia de Impulsa UIS, pronto nos comunicaremos con usted por medio del correo electrónico diligenciado para notificarle si sus datos son válidos para ser publicados.</p>

                    <Row>
                    <Col>
                        <Link to="/RegisterCompany2">
                                
                                    <input value="REGRESAR" className="primary-button join-botton"></input>
                                
                        </Link>
                    </Col>

                    <Col>
                        <Link to="/Perfil">
                                
                                <input value="GUARDAR" className="primary-button save-button"></input>
                                
                        </Link>
                    </Col>

                </Row>

            </form>
        </div>
    );
}

export default FormCompany3;