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
                <Col md={4}>
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

                <Col>  
                    <Row className="navbar-right">             
                        
                        <Link to="/login">
                            <button  className="buttonlogin" type="button"><img src={loginStart}   alt="loginStart"/></button>
                        </Link>
                            <img className="themeColor" src={themeColor} alt="color theme" />
                            <img className="quiclySearch" src={quiclySearch} alt="quickly search" />
                    </Row>     
                </Col>

            </Row>
        </Container>
    
    );
}

export default Header;