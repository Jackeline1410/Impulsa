import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {Row, Col, Container } from 'react-grid';
import '../styles/Login.scss';

const Login = () => {
    return(
        <div>
            <Header className="header" />
            <div>
            
                <h1 className="titleLogin">Iniciar Sesión</h1>

                <Container>
                <form action="/" className="login-form">
                <label for="password" className="labeluserlogin">Usuario:</label>
                <input type="password" id="password" placeholder="Email" className="input" />

                <label for="new-password" className="labeluserlogin">Contraseña:</label>
                <input type="password" id="new-password" placeholder="Contraseña" className="input" />

                <Row>
                    <Col>
                        <Link className="link-recoverypassword" to="/recovery-password" >
                            <p>Olvidaste tu contraseña?</p>
                        </Link>
                    </Col>
                    <Col>
                        <Link className="link-register" to="/register" >
                            <p>Registrarse</p>
                        </Link>
                    </Col>
                </Row>

                
                    
                    <button className="primary-button">CONFIRM</button>
                    
                
                </form>
                </Container>
                
            </div>
            <Footer />
        </div>
    );
}

export default Login;