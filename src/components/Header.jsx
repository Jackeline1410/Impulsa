import React from 'react';
import { Container, Row, Col } from 'react-grid';
import '../styles/Header.scss';

import logo from '@logos/Frame 137.svg';
import loginStart from '@icons/Vector (12).svg';
import themeColor from '@icons/Frame 168.svg';
import quiclySearch from '@icons/Vector (11).svg';
import { HashLink as Link } from 'react-router-hash-link';

const Header = () => {
    return(    
        <Container className="image-container">
            <Container fluid />
            <Row>
                <Col>
                <Link to="/">
                <div className="navbar-left">
                <img id="logo" src={logo} alt="logo" className="nav-logo" />
                </div>
                </Link>
                </Col>

                <Col md={6}>
                    <div className="navbar-center">
                        <Link to="/about"><p className="p">Quienes somos</p></Link>
                        <Link to="/emprendimiento"><p className="p">Emprendimiento Destacado</p></Link>
                        <Link to="/#categoryContainer"><p className="p">Categorías</p></Link>
                        <Link to="/promotions"><p className="p">Promo</p></Link>
                        <Link to="/contactUs"><p className="p">Contacto</p></Link>
                    </div>
                </Col>

                <Col>
                        <Link to="/login">
                        <div className="navbar-right">
                        <img className="loginStart" src={loginStart} alt="login start" />
                        </div>
                        </Link>
                        <img src={themeColor} alt="color theme" />
                        <img src={quiclySearch} alt="quickly search" />
                </Col>
            </Row>
        </Container>
    
    );
}

export default Header;