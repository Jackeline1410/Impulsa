import React from 'react';
import { Link } from 'react-router-dom';
import {Row, Col } from 'react-grid';
import iconCharge from '../assets/icons/iconCharge.svg';
import iconNote from '../assets/icons/iconNote.svg';

const FormCompany2 = () => {
    return(
        <div>
            <form action="/" className="form">
                <Row>
                    <label for="schedule" className="label">Horarios de atención:</label>
                </Row>
                <Row>
                    <textarea></textarea>
                </Row>

                
                <Row>
                    <label for="categoryCompany" className="label">Descripción corta o subcategoria a la cual pertenece:</label>
                </Row>
                <Row>
                    <textarea></textarea>
                </Row>
                

                <Row>
                    <label for="descriptionCompany" className="label">Descripción del emprendimiento/empresa (máximo 800 caracteres):</label>
                </Row>
                <Row>
                    <textarea></textarea>
                </Row>

                <Row>
                    <label for="page" className="label">Página web (enlace):</label>
                </Row>
                <Row>
                    <textarea></textarea>
                </Row>

                <Row>
                    <label for="facebook" className="label">Facebook (enlace):</label>
                </Row>
                <Row>
                    <textarea></textarea>
                </Row>

                <Row>
                    <label for="instagram" className="label">Instagram (enlace):</label>
                </Row>
                <Row>
                    <textarea></textarea>
                </Row>

                <Row>
                    <label for="twitter" className="label">Twitter (enlace):</label>
                </Row>
                <Row>
                    <textarea></textarea>
                </Row>


                <Row>
                    <label for="linkedin" className="label">LinkedIn (enlace):</label>
                </Row>
                <Row>
                    <textarea></textarea>
                </Row>

                <Row>
                    <Col md={4}>
                        <label for="logo" className="label">Cargar logo del emprendimiento/empresa:</label>
                    </Col>
                    <Col md={4}>
                        <p><strong>Cargar imagen</strong></p>
                    </Col>
                    <Col>
                        <img src={iconCharge} alt="iconCharge" />
                        <img src={iconNote} alt="iconNote" />
                    </Col>
                </Row>


                <Row>
                    <Col md={6}>
                        <label for="charge" className="label">Cargar imágenes de contenido (6 imágenes):</label>
                    </Col>
                </Row>

                <Row>
                    <Col md={4}>
                        <label for="image1" className="label"> Imagen #1:</label>
                    </Col>
                    <Col md={4}>
                        <p><strong>Cargar imagen</strong></p>
                        
                    </Col>
                    <Col md={4}>
                        <img src={iconCharge} alt="iconCharge" />
                        <img src={iconNote} alt="iconNote" />
                    </Col>
                </Row>


                <Row>
                    <Col md={4}>
                        <label for="image1" className="label"> Imagen #2:</label>
                    </Col>
                    <Col md={4}>
                        <p><strong>Cargar imagen</strong></p>
                        
                    </Col>
                    <Col md={4}>
                        <img src={iconCharge} alt="iconCharge" />
                        <img src={iconNote} alt="iconNote" />
                    </Col>
                </Row>

                <Row>
                    <Col md={4}>
                        <label for="image1" className="label"> Imagen #3:</label>
                    </Col>
                    <Col md={4}>
                        <p><strong>Cargar imagen</strong></p>
                        
                    </Col>
                    <Col md={4}>
                        <img src={iconCharge} alt="iconCharge" />
                        <img src={iconNote} alt="iconNote" />
                    </Col>
                </Row>

                <Row>
                    <Col md={4}>
                        <label for="image1" className="label"> Imagen #4:</label>
                    </Col>
                    <Col md={4}>
                        <p><strong>Cargar imagen</strong></p>
                        
                    </Col>
                    <Col md={4}>
                        <img src={iconCharge} alt="iconCharge" />
                        <img src={iconNote} alt="iconNote" />
                    </Col>
                </Row>


                <Row>
                    <Col md={4}>
                        <label for="image1" className="label"> Imagen #5:</label>
                    </Col>
                    <Col md={4}>
                        <p><strong>Cargar imagen</strong></p>
                        
                    </Col>
                    <Col md={4}>
                        <img src={iconCharge} alt="iconCharge" />
                        <img src={iconNote} alt="iconNote" />
                    </Col>
                </Row>

                <Row>
                    <Col md={4}>
                        <label for="image1" className="label"> Imagen #6:</label>
                    </Col>
                    <Col md={4}>
                        <p><strong>Cargar imagen</strong></p>
                        
                    </Col>
                    <Col md={4}>
                        <img src={iconCharge} alt="iconCharge" />
                        <img src={iconNote} alt="iconNote" />
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Link to="/RegisterCompany">
                                
                                <button className="primary-button">REGRESAR</button>
                                
                        </Link>
                    </Col>

                    <Col>
                        <Link to="/RegisterCompany3">
                                
                                <button className="primary-button">SIGUIENTE</button>
                            
                        </Link>
                    </Col>

                </Row>


            </form>

        </div>
    );
}

export default FormCompany2;