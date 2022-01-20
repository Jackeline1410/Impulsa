import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {Row, Col} from 'react-grid';

import logoSweetie from '../assets/logos/Sweetie.svg';
import addCompany from '../assets/icons/Addcompany.svg';


const Perfil = () => {
    return(
        <div>
            <Header />
            <h1>Perfil</h1>
            <p>Andrea Juliana Rangel Florez</p>
            <p>@anjuranflo</p>
            <p>Estudiante UIS: Diseño Industrial</p>
            <p>anjuranflo17@gmail.com</p>

            <p><strong>Emprendimientos registrados:</strong></p>
            <img src={logoSweetie} alt="logosweetie" />
            <p><strong>Sweetie Makeup</strong></p>
            <Row>
                <Col>
                    <p>Registrar otro emprendimiento</p>
                </Col>
                <Col>

                    <Link to="/RegisterCompany">
                        <img src={addCompany} alt="add-company" />
                    </Link>
                </Col>
            </Row>
            <Footer />
        </div>
    );
}

export default Perfil;