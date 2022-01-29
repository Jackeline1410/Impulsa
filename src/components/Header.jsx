import React, {useState} from 'react';
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
                        <Link className="header-link-hover" to="/about">Quienes somos</Link>
                        <Link className="header-link-hover" to="/emprendimiento">Emprendimiento Destacado</Link>
                        <Link className="header-link-hover" to="/#categoryContainer">Categorías</Link>
                        <Link className="header-link-hover" to="/promotions">Promo</Link>
                        <Link className="header-link-hover" to="/contactUs">Contacto</Link>
                    </div>
                </Col>

                <div className="navbar-right">
                    <Col>
                        <Link to="/login">
                            <img className="loginStart" src={loginStart} alt="loginStart"/>
                        </Link>
                    </Col>  
                    <Col>
                        <img src={themeColor} alt="color theme" />
                    </Col>
                    <Col>
                        <img src={quiclySearch} alt="quickly search" />
                    </Col>              
                </div>
            </Row>
        </Container>
    
    );
}

export default Header;