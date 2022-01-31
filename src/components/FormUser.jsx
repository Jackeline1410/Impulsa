import React from 'react';
import { Link } from 'react-router-dom';
import {Row, Col} from 'react-grid';
import '../styles/FormUser.scss';


const FormUser = () => {
    return(
        <div className="mainContainer">
        <h1 className="title">Registro de usuario</h1>
            <p className="paragraph">Impulsa UIS busca reconocer a los emprendimientos y empresas creadas por estudiantes y egresados de pregrado y posgrado de la Universidad Industrial de santander. Esta es una plataforma para la promoción y visibilización de sus productos y servicios, cualquier interesado deberá comunicarse directamente con los datos de contacto de cada emprendedor.</p>
            <p className="p"><strong>Este formulario deberá ser diligenciado completamente</strong></p>

            <form action="/" className="form">
                <Row>
                    <Col md={6}>
                        <label for="names" className="label">Nombres:</label>
                    </Col>
                    <Col md={6}>
                        <label for="lastnames" className="label">Apellidos:</label>
                    </Col>
                </Row>

                <Row>
                    <Col md={6}>
                        <input id="names" placeholder="Nombres" className="input input-names" size="65"/>
                    </Col>
                    <Col md={6}>
                        <input type="lastnames" id="lastnames" placeholder="Apellidos" className="input input-lastnames" size="65" />
                    </Col>
                </Row>


                <Row>
                    <Col md={6}>
                    <label for="typeDocument" className="label">Tipo de documento de identidad:</label>
                    </Col>
                    <Col md={6}>
                    <label for="numberDocument" className="label">Número de documento de identidad:</label>
                    </Col>

                </Row>

                <Row>
                    <Col md={6}>
                    <select id="typeDocument"> 
                        <option value="ti">TI</option>
                        <option value="cc">CC</option>
                        <option selected value="ce">CE</option>
                        <option value="passport">PASAPORTE</option>
                    </select>                        
                    </Col>
                    <Col md={6}>
                        <input type="numberDocument" id="numberDocument" placeholder="Número de documento" className="input input-numberDocument" size="65"/>
                    </Col>
                </Row>

                <Row>
                    <Col>
                    <label for="contactPhone" className="label">Teléfono de contacto:</label>
                    </Col>
                </Row>

                <Row>
                    <Col>
                    <input type="contactPhone" id="contactPhone" placeholder="Teléfono de contacto" className="input input-numberDocument"  size="137"/>
                    </Col>
                </Row>

                <Row>
                    <Col>
                    <label for="relationUniversity" className="label">Relación con la Universidad:</label>
                    </Col>
                </Row>

                <Row>
                    <Col>
                    <select id="relationUniversity" placeholder="seleccione una opción"> 
                        <option value="ti">Estudiante</option>
                        <option value="cc">Egresado</option>
                        <option selected value="ce">Profesor</option>
                        <option value="passport">Ejecutivo</option>
                    </select> 
                    </Col>
                </Row>


                <Row>
                    <Col>
                    <label for="programPregrado" className="label">Programa de pregrado al cual pertenece o del cual es egresado:</label>
                    </Col>
                </Row>

                <Row>
                    <Col>
                    <input type="programPregrado" id="programPregrado" placeholder="Seleccione un programa de pregrado" className="input input-programPregrado" size="137"/>
                    </Col>
                </Row>


                <Row>
                    <Col>
                    <label for="programPosgrado" className="label">Programa de posgrado al cual pertenece o del cual es egresado:</label>
                    </Col>
                </Row>

                <Row>
                    <Col>
                    <input type="programPosgrado" id="programPosgrado" placeholder="Seleccione un programa de posgrado" className="input input-programPregrado" size="137" />
                    </Col>
                </Row>


                <Row>
                    <Col md={6}>
                    <label for="email" className="label">Email:</label>
                    </Col>
                    <Col md={6}>
                    <label for="password" className="label">Contraseña:</label>
                    </Col>
                </Row>

                <Row>
                    <Col md={6}>
                        <input type="email" id="email" placeholder="Email" className="input input-email" size="65"/>
                    </Col>
                    <Col md={6}>
                        <input type="password" id="password" placeholder="Contraseña" className="input input-password" size="65" />
                    </Col>
                </Row>
                    
                <Row>
                    <Link to="/login">
                        <button className="primary-button">REGISTRARME</button>
                    </Link>
                </Row>

            </form>
                    
        </div>
    );
}

export default FormUser;