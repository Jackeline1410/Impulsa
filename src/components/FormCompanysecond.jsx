import React from 'react';
import { Link } from 'react-router-dom';
import {Row, Col, Container } from 'react-grid';
import iconCharge from '../assets/icons/iconCharge.svg';
import iconNote from '../assets/icons/iconNote.svg';

import '../styles/FormCompanysecond.scss';

const FormCompanysecond = () => {
    return(
        <div>
            <Container>
            <form action="/" className="formcompanysecond">
                <Row>
                    <label for="schedule" className="label">Horarios de atención:</label>
                </Row>
                
                <Row>
                    <textarea className="textareaformcompanysecond"></textarea>
                </Row>

                
                <Row>
                    <label for="categoryCompany" className="label">Descripción corta o subcategoria a la cual pertenece:</label>
                </Row>
                <Row>
                    <textarea className="textareaformcompanysecond"></textarea>
                </Row>
                

                <Row>
                    <label for="descriptionCompany" className="label">Descripción del emprendimiento/empresa (máximo 800 caracteres):</label>
                </Row>
                <Row>
                    <textarea className="textareaformcompanysecond"></textarea>
                </Row>

                <Row>
                    <label for="page" className="label">Página web (enlace):</label>
                </Row>
                <Row>
                    <textarea className="textareaformcompanysecond"></textarea>
                </Row>

                <Row>
                    <label for="facebook" className="label">Facebook (enlace):</label>
                </Row>
                <Row>
                    <textarea className="textareaformcompanysecond"></textarea>
                </Row>

                <Row>
                    <label for="instagram" className="label">Instagram (enlace):</label>
                </Row>
                <Row>
                    <textarea className="textareaformcompanysecond"></textarea>
                </Row>

                <Row>
                    <label for="twitter" className="label">Twitter (enlace):</label>
                </Row>
                <Row>
                    <textarea className="textareaformcompanysecond"></textarea>
                </Row>


                <Row>
                    <label for="linkedin" className="label">LinkedIn (enlace):</label>
                </Row>
                <Row>
                    <textarea className="textareaformcompanysecond"></textarea>
                </Row>

                <Row>
                    <Col md={6} className="columnformcompanysecond">
                        <p for="logo" >Cargar logo del emprendimiento/empresa:</p>
                    
                        <p><strong>Cargar imagen</strong></p>
                    </Col>
                    <Col className="columnrightformcompanysecond" >
                        <img className="iconchargeformcompanysecond" src={iconCharge} alt="iconCharge" />
                        <img className="iconnoteformcompanysecond" src={iconNote} alt="iconNote" />
                    </Col>
                </Row>


                <Row>
                    <Col >
                        <p for="charge" className="label">Cargar imágenes de contenido (6 imágenes):</p>
                    </Col>
                </Row>

                <Row>
                    <Col className="columnleftformcompanysecond">
                        <p className="nameimageformcompanysecond" for="image1"> Imagen #1:</p>
                        <p className="nameimageformcompanysecond"><strong>Cargar imagen</strong></p>
                        <img className="iconchargeformcompanysecond" src={iconCharge} alt="iconCharge" />
                        <img className="iconnoteformcompanysecond" src={iconNote} alt="iconNote" />
                    </Col>
                </Row>


                <Row>
                    <Col className="columnleftformcompanysecond">
                        <p className="nameimageformcompanysecond" for="image1"> Imagen #2:</p>
                        <p className="nameimageformcompanysecond"><strong>Cargar imagen</strong></p>
                        <img className="iconchargeformcompanysecond" src={iconCharge} alt="iconCharge" />
                        <img className="iconnoteformcompanysecond" src={iconNote} alt="iconNote" />
                    </Col>
                </Row>

                <Row>
                    <Col className="columnleftformcompanysecond">
                        <p className="nameimageformcompanysecond" for="image1"> Imagen #3:</p>
                        <p className="nameimageformcompanysecond"><strong>Cargar imagen</strong></p>
                        <img className="iconchargeformcompanysecond" src={iconCharge} alt="iconCharge" />
                        <img className="iconnoteformcompanysecond" src={iconNote} alt="iconNote" />
                    </Col>
                </Row>

                <Row>
                    <Col className="columnleftformcompanysecond">
                        <p className="nameimageformcompanysecond" for="image1" > Imagen #4:</p>
                        <p className="nameimageformcompanysecond"><strong>Cargar imagen</strong></p>
                        <img className="iconchargeformcompanysecond" src={iconCharge} alt="iconCharge" />
                        <img className="iconnoteformcompanysecond" src={iconNote} alt="iconNote" />
                    </Col>
                </Row>


                <Row>
                    <Col className="columnleftformcompanysecond">
                        <p className="nameimageformcompanysecond" for="image1"> Imagen #5:</p>
                        <p className="nameimageformcompanysecond"><strong>Cargar imagen</strong></p>
                        <img className="iconchargeformcompanysecond" src={iconCharge} alt="iconCharge" />
                        <img className="iconnoteformcompanysecond" src={iconNote} alt="iconNote" />
                    </Col>
                </Row>

                <Row>
                    <Col className="columnleftformcompanysecond">
                        <p className="nameimageformcompanysecond" for="image1"> Imagen #6:</p>
                        <p className="nameimageformcompanysecond"><strong>Cargar imagen</strong></p>
                        <img className="iconchargeformcompanysecond" src={iconCharge} alt="iconCharge" />
                        <img className="iconnoteformcompanysecond" src={iconNote} alt="iconNote" />
                    </Col>
                </Row>

                
                   <Link to="/RegisterCompany">
                                
                            <button className="primary-button">REGRESAR</button>
                                
                        </Link>
                    
                  
                        <Link to="/RegisterCompany3">
                                
                            <button className="primary-button">SIGUIENTE</button>
                            
                        </Link>
                


            </form>
            </Container>
        </div>
    );
}

export default FormCompanysecond;