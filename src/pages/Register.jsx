import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Row, Col } from 'react-grid';


const Register = () => {
    return(
        <div>
            <Header />,
            <h1>Registro de usuario</h1>
            <p>Impulsa UIS busca reconocer a los emprendimientos y empresas creadas por estudiantes y egresados de pregrado y posgrado de la Universidad Industrial de santander. Esta es una plataforma para la promoción y visibilización de sus productos y servicios, cualquier interesado deberá comunicarse directamente con los datos de contacto de cada emprendedor.</p>
            <p><strong>Este formulario deberá ser diligenciado completamente</strong></p>

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
                        <input type="names" id="names" placeholder="Nombres" className="input input-names" />
                    </Col>
                    <Col md={6}>
                        <input type="lastnames" id="lastnames" placeholder="Apellidos" className="input input-lastnames" />
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
                        <input type="typeDocument" id="typeDocument" placeholder="Seleccione el tipo de documento" className="input input-typeDocument" />
                    </Col>
                    <Col md={6}>
                        <input type="numberDocument" id="numberDocument" placeholder="Número de documento" className="input input-numberDocument" />
                    </Col>
                </Row>

                <Row>
                    <Col>
                    <label for="contactPhone" className="label">Teléfono de contacto:</label>
                    </Col>
                </Row>

                <Row>
                    <Col>
                    <input type="contactPhone" id="contactPhone" placeholder="Teléfono de contacto" className="input input-numberDocument" />
                    </Col>
                </Row>

                <Row>
                    <Col>
                    <label for="relationUniversity" className="label">Relación con la Universidad:</label>
                    </Col>
                </Row>

                <Row>
                    <Col>
                    <input type="relationUniversity" id="relationUniversity" placeholder="Relación con la Universidad" className="input input-relationUniversity" />
                    </Col>
                </Row>


                <Row>
                    <Col>
                    <label for="programPregrado" className="label">Programa de pregrado al cual pertenece o del cual es egresado:</label>
                    </Col>
                </Row>

                <Row>
                    <Col>
                    <input type="programPregrado" id="programPregrado" placeholder="Seleccione un programa de pregrado" className="input input-programPregrado" />
                    </Col>
                </Row>


                <Row>
                    <Col>
                    <label for="programPosgrado" className="label">Programa de posgrado al cual pertenece o del cual es egresado:</label>
                    </Col>
                </Row>

                <Row>
                    <Col>
                    <input type="programPosgrado" id="programPosgrado" placeholder="Seleccione un programa de posgrado" className="input input-programPregrado" />
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
                        <input type="email" id="email" placeholder="Email" className="input input-email" />
                    </Col>
                    <Col md={6}>
                        <input type="password" id="password" placeholder="Contraseña" className="input input-password" />
                    </Col>
                </Row>

                <Row>
                    <input type="submit" value="GUARDAR" className="primary-button join-botton"></input>
                </Row>

            </form>
            <Footer />
        </div>
    );
}

export default Register;