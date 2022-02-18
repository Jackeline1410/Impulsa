import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Container } from 'react-grid';

import '../styles/FormCompanyfirst.scss';

const FormCompany1 = () => {
    return(
        <div>
            <Container>
            <form action="/" >
                <Row>
                    <Col>
                    <label for="nameCompany" className="label">Nombre del emprendimiento/empresa:</label>
                    </Col>
                </Row>

                <Row>
                    <Col>
                    <input type="nameCompany" id="nameCompany" className="inputlargformuser" />
                    </Col>
                </Row>


                <Row>
                    <Col md={6}>
                    <label for="documentBoss" className="label">NIT o CC del propietario (sin puntos, guiones ni digito de verificación):</label>
                    </Col>
                    <Col md={6}>
                    <label for="numberVerification" className="label">Dígito de verificación (si aplica):</label>
                    </Col>
                </Row>

                <Row>
                    <Col md={6}>
                        <input type="documentBoss" id="documentBoss"  className="inputlargformuser" />
                    </Col>
                    <Col md={6}>
                        <input type="numberVerification" id="numberVerification" className="inputlargformuser" />
                    </Col>
                </Row>


                <Row>
                    <Col>
                    <label for="registerCamara" className="label">Se encuentra registrado en la Cámara de Comercio:</label>
                    </Col>
                </Row>

                <Row>
                    <Col>
                    <select 
                    id="registerCamara"
                    className="inputlargformuser"
                    >
                        <option value="ti">Seleccionar</option>
                        <option value="ti">SI</option>
                        <option value="cc">NO</option>
                    </select>  
                    </Col>  
                </Row>


                <Row>
                    <Col>
                    <label for="categoryCamara" className="label">Categoría a la cual pertenece:</label>
                    </Col>
                </Row>

                <Row>
                    <Col>
                    <select 
                    id="categoryCamara"
                    className="inputlargformuser"
                    > 
                        <option value="ti">Seleccionar</option>
                        <option value="ti">Persona Natural</option>
                        <option value="cc">Persona Jurídica</option>
                    </select>    
                    </Col>
                </Row>

                <Row>
                    <Col>
                    <label for="timeCompany" className="label">Años de constituido el emprendimiento o empresa:</label>
                    </Col>
                </Row>

                <Row>
                    <Col>
                    <input type="timeCompany" id="timeCompany" className="inputlargformuser" />
                    </Col>
                </Row>

                <Row>
                    <Col>
                    <label for="sales" className="label">Ha realizado ventas en los dos últimos meses:</label>
                    </Col>
                </Row>

                <Row>
                    <Col>
                    <select 
                    id="sales"
                    className="inputlargformuser"
                    > 
                        <option value="ti">Seleccionar</option>
                        <option value="ti">Si</option>
                        <option value="cc">No</option>
                    </select>
                    </Col> 
                </Row>

                <Row>
                    <Col>
                    <label for="deparment" className="label">Ubicación del lugar de base del emprendimiento/empresa (departamento):</label>
                    </Col>
                </Row>

                <Row>
                    <Col>
                    <select 
                    id="deparment"
                    className="inputlargformuser"
                    > 
                        <option value="ti">Seleccionar</option>
                        <option value="ti">Santander</option>
                        <option value="cc">Antioquia</option>
                        <option value="cc">Bolivar</option>
                    </select>
                    </Col>    
                </Row>

                <Row>
                    <Col>
                    <label for="municipio" className="label">Ubicación del lugar de base del emprendimiento/empresa (municipio):</label>
                    </Col>
                </Row>

                <Row>
                    <Col>
                    <select 
                    id="municipio"
                    className="inputlargformuser"
                    > 
                        <option value="ti">Seleccionar</option>
                        <option value="ti">Bucaramanga</option>
                        <option value="cc">Medellin</option>
                        <option value="cc">Cartagena</option>
                    </select>  
                    </Col> 
                </Row>

                <Row>
                    <Col>
                    <label for="addressCompany" className="label">Dirección:</label>
                    </Col>
                </Row>

                <Row>
                    <Col>
                    <input type="addressCompany" id="nameCompany" className="inputlargformuser" />
                    </Col>
                </Row>


                <Row>
                    <Col>
                    <label for="contactCompany" className="label">Teléfono/celular de contacto:</label>
                    </Col>
                </Row>

                <Row>
                    <Col>
                    <input type="contactCompany" id="contactCompany" className="inputlargformuser" />
                    </Col>
                </Row>


                <Row>
                    <Col>
                    <label for="sizeCompany" className="label">Número de empleados:</label>
                    </Col>
                </Row>

                <Row>
                    <Col>
                    <input type="sizeCompany" id="sizeCompany" className="inputlargformuser" />
                    </Col>
                </Row>


                <Row>
                    <Col>
                    <label for="shipping" className="label">Realiza envíos nacionales:</label>
                    </Col>
                </Row>

                <Row>
                    <Col >
                    <select 
                    id="shipping"
                    className="inputlargformuser"
                    > 
                        <option value="ti">Seleccionar</option>
                        <option value="ti">Si</option>
                        <option value="cc">No</option>
                    </select>    
                    </Col>
                </Row>

                <Row className="rowbuttons">
                  
                        <Link to="/perfil">   
                            <button className="primary-button">REGRESAR</button>  
                        </Link>
                   <Col md={2}></Col>
                        <Link to="/registercompany2">
                            <button className="primary-button">SIGUIENTE</button>
                        </Link>
                
                </Row>

            </form>
            </Container>
        </div>
    );
}

export default FormCompany1;