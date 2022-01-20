import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-grid';

const FormCompany1 = () => {
    return(
        <div>
            <form action="/" className="form">
                <Row>
                    <label for="nameCompany" className="label">Nombre del emprendimiento/empresa:</label>
                </Row>

                <Row>
                    <input type="nameCompany" id="nameCompany" className="input input-nameCompany" />
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
                        <input type="documentBoss" id="documentBoss"  className="input input-documentBoss" />
                    </Col>
                    <Col md={6}>
                        <input type="numberVerification" id="numberVerification" className="input input-numberVerification" />
                    </Col>
                </Row>


                <Row>
                    <label for="registerCamara" className="label">Se encuentra registrado en la Cámara de Comercio:</label>
                </Row>

                <Row>
                    <select id="registerCamara">
                        <option value="ti">Seleccionar</option>
                        <option value="ti">SI</option>
                        <option value="cc">NO</option>
                    </select>    
                </Row>


                <Row>
                    <label for="categoryCamara" className="label">Categoría a la cual pertenece:</label>
                </Row>

                <Row>
                    <select id="categoryCamara"> 
                        <option value="ti">Seleccionar</option>
                        <option value="ti">Persona Natural</option>
                        <option value="cc">Persona Jurídica</option>
                    </select>    
                </Row>

                <Row>
                    <label for="timeCompany" className="label">Años de constituido el emprendimiento o empresa:</label>
                </Row>

                <Row>
                    <input type="timeCompany" id="timeCompany" className="input input-timeCompany" />
                </Row>

                <Row>
                    <label for="sales" className="label">Ha realizado ventas en los dos últimos meses:</label>
                </Row>

                <Row>
                    <select id="sales"> 
                        <option value="ti">Seleccionar</option>
                        <option value="ti">Si</option>
                        <option value="cc">No</option>
                    </select>    
                </Row>

                <Row>
                    <label for="deparment" className="label">Ubicación del lugar de base del emprendimiento/empresa (departamento):</label>
                </Row>

                <Row>
                    <select id="deparment"> 
                        <option value="ti">Seleccionar</option>
                        <option value="ti">Santander</option>
                        <option value="cc">Antioquia</option>
                        <option value="cc">Bolivar</option>
                    </select>    
                </Row>

                <Row>
                    <label for="municipio" className="label">Ubicación del lugar de base del emprendimiento/empresa (municipio):</label>
                </Row>

                <Row>
                    <select id="municipio"> 
                        <option value="ti">Seleccionar</option>
                        <option value="ti">Bucaramanga</option>
                        <option value="cc">Medellin</option>
                        <option value="cc">Cartagena</option>
                    </select>    
                </Row>

                <Row>
                    <label for="addressCompany" className="label">Dirección:</label>
                </Row>

                <Row>
                    <input type="addressCompany" id="nameCompany" className="input input-addressCompany" />
                </Row>


                <Row>
                    <label for="contactCompany" className="label">Teléfono/celular de contacto:</label>
                </Row>

                <Row>
                    <input type="contactCompany" id="contactCompany" className="input input-contactCompany" />
                </Row>


                <Row>
                    <label for="sizeCompany" className="label">Número de empleados:</label>
                </Row>

                <Row>
                    <input type="sizeCompany" id="sizeCompany" className="input input-sizeCompany" />
                </Row>


                <Row>
                    <label for="shipping" className="label">Realiza envíos nacionales:</label>
                </Row>

                <Row>
                    <select id="shipping"> 
                        <option value="ti">Seleccionar</option>
                        <option value="ti">Si</option>
                        <option value="cc">No</option>
                    </select>    
                </Row>

                <Row>
                    <Col>
                        <Link to="/perfil">
                                
                                <input value="REGRESAR" className="primary-button join-botton"></input>
                                
                        </Link>
                    </Col>

                    <Col>
                        <Link to="/registercompany2">
                                
                                <input value="SIGUIENTE" className="primary-button join-botton"></input>
                                
                        </Link>
                    </Col>
                </Row>

            </form>
        </div>
    );
}

export default FormCompany1;