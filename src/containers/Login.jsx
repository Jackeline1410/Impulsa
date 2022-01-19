import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {Row, Col } from 'react-grid';
import '../styles/Login.scss';

const Login = () => {
    return(
        <div className="login">
            <Header />,
            <div className="form-container">
            
                <h1 className="title">Iniciar Sesión</h1>

                <form action="/" className="form">
                <label for="password" className="label">Usuario:</label>
                <input type="password" id="password" placeholder="Email" className="input input-password" />

                <label for="new-password" className="label">Contraseña:</label>
                <input type="password" id="new-password" placeholder="Contraseña" className="input input-password" />

                <Row>
                    <Col><p>Olvidaste tu contraseña?</p></Col>
                    <Col>Registrarse</Col>
                </Row>

                <input type="submit" value="Confirm" className="primary-button login-button" />
                </form>
            </div>
            <Footer />
        </div>
    );
}

export default Login;