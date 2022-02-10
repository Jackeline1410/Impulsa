import React from 'react';
import { Link } from 'react-router-dom';
import {Row, Col} from 'react-grid';
import '../styles/FormUser.scss';


const FormUser = () => {
    return(
        <div>
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
                        <input id="names" placeholder="Nombres" className="input" size="65"/>
                    </Col>
                    <Col md={6}>
                        <input type="lastnames" id="lastnames" placeholder="Apellidos" className="input" size="65" />
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
                    <select 
                    id="typeDocument"
                    className="selectformuser"
                    > 
                        <option value="ti">Seleccione una opción</option>
                        <option value="ti">TI</option>
                        <option value="cc">CC</option>
                        <option selected value="ce">CE</option>
                        <option value="passport">PASAPORTE</option>
                    </select>                        
                    </Col>
                    <Col md={6}>
                        <input type="numberDocument" id="numberDocument" placeholder="Número de documento" className="input" size="65"/>
                    </Col>
                </Row>

                <Row>
                    <Col>
                    <label for="contactPhone" className="label">Teléfono de contacto:</label>
                    </Col>
                </Row>

               
                    <input type="contactPhone" id="contactPhone" placeholder="Teléfono de contacto" className="input" />
                

                <Row>
                    <Col>
                    <label for="relationUniversity" className="label">Relación con la Universidad:</label>
                    </Col>
                </Row>

                <Row>
                    <Col>
                    <select 
                    id="relationUniversity" 
                    placeholder="seleccione una opción"
                    className="selectformuser"
                    > 
                        <option value="ti">Estudiante Pregrado</option>
                        <option value="ti">Estudiante Posgrado</option>
                        <option value="cc">Egresado de Pregrado</option>
                        <option value="cc">Egresado de Posgrado</option>
                        <option selected value="ce">Docente planta</option>
                        <option value="cc">Docente catedra</option>
                        <option value="passport">Administrativo</option>
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
                    <select 
                    id="relationUniversity" 
                    placeholder="seleccione una opción"
                    className="selectformuser"
                    > 
                        <option value="ti">Seleccione un programa de pregrado</option>
                        <option value="cc">ZOOTECNIA</option>
                        <option valur="tt">INGENIERIA FORESTAL</option>
                        <option value="passport">TECNOLOGIA AGROINDUSTRIAL</option>
                        <option value="ti">BIOLOGIA</option>
                        <option value="cc">INGENIERIA DE SISTEMAS</option>
                        <option valur="tt">TECNOLOGIA JURIDICA</option>
                        <option value="passport">TECNOLOGÍA EN GESTIÓN JUDICIAL Y CRIMINALISTICA</option>
                        <option value="ti">QUIMICA</option>
                        <option value="cc">LIC EN MATEMATICAS</option>
                        <option valur="tt">BELLAS ARTES</option>
                        <option value="passport">FISICA</option>
                        <option value="ti">LIC EN EDUC BASICA CON ENFASIS CIENCIAS NAT EDU AMB</option>
                        <option value="cc">LIC EN INGLES</option>
                        <option valur="tt">INGENIERIA CIVIL</option>
                        <option value="passport">INGENIERIA INDUSTRIAL</option>
                        <option value="ti">INGENIERIA MECANICA</option>
                        <option value="cc">INGENIERA ELECTRONICA</option>
                        <option valur="tt">INGENIERIA METALURGICA</option>
                        <option value="passport">DISEÑO INDUSTRIAL</option>
                        <option value="ti">LIC EN EDUC BASICA ENFASIS LENGUA CASTELLANA</option>
                        <option value="cc">LIC EN ESPAÑOL Y LITERATURA</option>
                        <option valur="tt">LIC EN MUSICA</option>
                        <option value="passport">INGENIERA DE PETROLEOS</option>
                        <option value="passport">INGENIERA QUIMICA</option>
                        <option value="passport">GEOLOGIA</option>
                        <option value="passport">FILOSOFIA</option>
                        <option value="passport">MATEMATICAS</option>
                        <option value="passport">TRABAJO SOCIAL</option>
                        <option value="passport">HISTORIA</option>
                        <option value="passport">ECONOMIA</option>
                        <option value="passport">DERECHO</option>
                        <option value="passport">ENFERMERIA</option>
                        <option value="passport">MEDICINA</option>
                        <option value="passport">FISIOTERAPIA</option>
                        <option value="passport">NUTRICION Y DIETETICA</option>
                        <option value="passport">TURISMO</option>
                        <option value="passport">HISTORIA Y ARCHIVISTICA</option>
                        <option value="passport">ARTES PLASTICAS</option>
                        <option value="passport">INGENIERIA DE PROCESOS DE REFINACION Y PETROQUIMICA</option>
                        <option value="passport">LIC LENGUAS EXTRANJERAS ENFASIS EN INGLES</option>
                        <option value="passport">LIC EN LITERATURA Y LENGUA CASTELLANA</option>
                        <option value="passport">LIC EN EDUCACION BASICA PRIMARIA</option>
                        <option value="passport">TECNOLOGIA EMPRESARIAL</option>
                        <option value="passport">GESTION EMPRESARIAL</option>
                        <option value="passport">TECNOLOGIA EN REGENCIA DE FARMACIA</option>
                        <option value="passport">TECNOLOGIA AGROPECUARIA</option>
                        <option value="passport">PRODUCCION AGROINDUSTRIAL</option>
                        <option value="passport">TURISMO</option>
                        <option value="passport">TECNICO PROFESIONAL EN PRODUCCION AGROPECUARIA</option>
                        <option value="passport">ADMINISTRACION AGROINDUSTRIAL</option>
                    </select> 
                    </Col>
                </Row>


                <Row>
                    <Col>
                    <label for="programPosgrado" className="label">Programa de posgrado al cual pertenece o del cual es egresado:</label>
                    </Col>
                </Row>

                <Row>
                    <Col>
                <select 
                    id="relationUniversity" 
                    placeholder="seleccione una opción"
                    className="selectformuser"
                    > 
                        <option value="ti">Seleccione un programa de pregrado</option>
                        <option value="cc">ESP EN DOCENCIA UNIVERSITARIA</option>
                        <option valur="tt">DOCTORADO EN ING. QUIMICA</option>
                        <option value="passport">ESP EN ORTOPEDIA Y TRAUMATOLOGIA</option>
                        <option value="ti">ESP EN QUIMICA AMBIENTAL</option>
                        <option value="cc">ESP EN GERENCIA DE MANTENIMIENTO</option>
                        <option valur="tt">MAESTRIA EN SEMIOTICA</option>
                        <option value="passport">MAESTRIA EN CIENCIAS BASICAS BIOMEDICAS</option>
                        <option value="ti">MAESTRIA EN ING. CIVIL</option>
                        <option value="cc">ESP EN ESTRUCTURAS</option>
                        <option valur="tt">ESP EN EVALUACION Y GERENCIA DE PROYECTOS</option>
                        <option value="passport">DOCTORADO EN CIENCIAS NATURALES FISICAS</option>
                        <option value="ti">DOCTORADO EN QUIMICA</option>
                        <option value="cc">ESP EN TELECOMUNICACIONES</option>
                        <option valur="tt">MAESTRIA EN ING. DE MATERIALES</option>
                        <option value="passport">ESP EN GERENCIA DE HIDROCARBUROS</option>
                        <option value="ti">ESP EN INGENIERIA DEL GAS</option>
                        <option value="cc">ESP EN PRODUCCION DE HIDROCARBUROS</option>
                        <option valur="tt">MAESTRIA EN ING ELECTRONICA</option>
                        <option value="passport">MAESTRIA EN EPIDEMIOLOGIA</option>
                        <option value="ti">ESP EN ATENCION DE ENFERMERIA EN CUIDADO CRITICO</option>
                        <option value="cc">ESP EN GINECOLOGIA Y OBSTETRICA</option>
                        <option valur="tt">ESP EN CIRUGIA GENERAL</option>
                        <option value="passport">ESP EN MEDICINA INTERNA</option>
                        <option value="passport">ESP EN PATOLOGIA</option>
                        <option value="passport">ESP EN ANESTESIOLOGIA Y REANIMACION</option>
                        <option value="passport">ESP EN OFTALMOLOGIA</option>
                        <option value="passport">ESP EN ADMINISTRACION DE SERVICIOS DE SALUD</option>
                        <option value="passport">ESP EN PEDIATRIA</option>
                        <option value="passport">MAESTRIA EN ING. ELECTRICA</option>
                        <option value="passport">MAESTRIA EN ING. QUIMICA</option>
                        <option value="passport">MAESTRIA EN FISICA</option>
                        <option value="passport">MAESTRIA EN QUIMICA</option>
                        <option value="passport">MAESTRIA EN GEOLOGIA</option>
                        <option value="passport">ESP EN ING. AMBIENTAL</option>
                        <option value="passport">MAESTRIA EN HISTORIA</option>
                        <option value="passport">ESP EN GERENCIA DE PROYECTOS DE CONSTRUCCION</option>
                        <option value="passport">ESP EN ESTADISTICA</option>
                        <option value="passport">MAESTRIA EN MATEMATICAS</option>
                        <option value="passport">MAESTRIA EN ING DE SISTEMAS E INFORMATICA</option>
                        <option value="passport">MAESTRIA EN ING DE HIDROCARBUROS</option>
                        <option value="passport">MAESTRIA EN FILOSOFIA</option>
                        <option value="passport">MAESTRIA EN ING DE TELECOMUNICACIONES</option>
                        <option value="passport">DOCTORADO EN ING AREA ING. ELECTRONICA</option>
                        <option value="passport">DOCTORADO EN ING AREA GESTION Y DESARROLLO TECNOLO</option>
                        <option value="passport">MAESTRIA EN ING INDUSTRIAL</option>
                        <option value="passport">ESP EN CIRUGIA PLASTICA Y RECONSTRUCTIVA</option>
                        <option value="passport">MAESTRIA EN ING MECANICA</option>
                        <option value="passport">MAESTRIA EN ING AMBIENTAL</option>
                        <option value="passport">MAESTRIA EN GEOTECNIA</option>
                        <option value="passport">MAESTRIA EN QUIMICA AMBIENTAL</option>
                        <option value="passport">MAESTRIA EN PEDAGOGIA</option>
                        <option value="passport">MAESTRIA EN GERENCIA DE NEGOCIOS - MBA</option>
                        <option value="passport">MAESTRIA EN EDUCACION MATEMATICA</option>
                        <option value="passport">MAESTRIA EN FISIOTERAPIA</option>
                        <option value="passport">MAESTRIA EN BIOLOGIA</option>
                        <option value="passport">MAESTRIA EN ING ESTRUCTURAL</option>
                        <option value="passport">DOCTORADO EN ING DE MATERIALES</option>
                        <option value="passport">ESP EN SISTEMAS DE DISTRIBUCION DE ENERGIA ELECTR</option>
                        <option value="passport">MAESTRIA EN SISTEMAS DE DISTRIBUCION DE ENERGIA ELECTR</option>
                        <option value="passport">MAESTRIA EN DERECHOS HUMANOS</option>
                        <option value="passport">MAESTRIA EN DIDACTICA DE LA LENGUA</option>
                        <option value="passport">MAESTRIA EN GEOFISICA</option>
                        <option value="passport">MAESTRIA EN ECONOMIA Y DESARROLLO</option>
                        <option value="passport">MAESTRIA EN GEOMATICA</option>
                        <option value="passport">ESP EN ING DE REFRIGERACION Y CLIMATIZACION</option>
                        <option value="passport">MAESTRIA EN GERENCIA DE MANTENIMIENTO</option>
                        <option value="passport">DOCTORADO EN HISTORIA</option>
                        <option value="passport">MAESTRIA EN GESTION Y POLITICAS PUBLICAS</option>
                        <option value="passport">MAESTRIA EN MATEMATICA APLICADA</option>
                        <option value="passport">DOCTORADO EN CIENCIAS BIOMEDICAS</option>
                        <option value="passport">MAESTRIA EN MICROBIOLOGIA</option>
                        <option value="passport">MAESTRIA EN GERENCIA DE LA SEGURIDAD Y SALUD EN EL TRABAJO</option>
                        <option value="passport">DOCTORADO EN CIENCIAS DE LA COMPUTACION</option>
                        <option value="passport">ESP EN GERENCIA DE LA SEGURIDAD Y SALUD EN EL TRABAJO</option>
                        <option value="passport">MAESTRIA EN INTERVENCION SOCIAL</option>
                        <option value="passport">MAESTRIA EN ALTOS ESTUDIOS LATINOAMERICANOS</option>
                        <option value="passport">MAESTRIA EN ING DE PETROLEOS Y GAS</option>
                        <option value="passport">DOCTORADO EN FILOSOFIA</option>
                        <option value="passport">MAESTRIA EN INFORMATICA PARA LA EDUCACION</option>
                        <option value="passport">MAESTRIA EN EVALUACION Y GERENCIA DE PROYECTOS</option>
                        <option value="passport">ESP EN ING DE YACIMIENTOS</option>
                        <option value="passport">MAESTRIA EN METODOS Y TECNICAS DE INVESTIGACION</option>
                        <option value="passport">MAESTRIA EN RECURSOS HIDRICOS Y SANEAMIENTO AMB</option>
                        <option value="passport">DOCTORADO EN FISICA</option>
                        <option value="passport">MAESTRIA EN INFRAESTRUCTURA Y MATERIALES DE VIAS</option>
                        <option value="passport">DOCTORADO EN ING MECANICA</option>
                        <option value="passport">ESP EN ING AUTOMOTRIZ</option>
                        <option value="passport">MAESTRIA EN INNOVACION Y DISEÑO</option>
                        <option value="passport">ESP TECNOLOGICA EN DESARROLLO DE PRODUCTO</option>
                    </select> 
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
                    
                
                    <Link to="/login">
                        <button className="primary-button">REGISTRARME</button>
                    </Link>
              

            </form>
                    
        </div>
    );
}

export default FormUser;