import React from 'react';
import { Row, Col } from 'react-grid';
import '../styles/Header.scss';

import logo from '@logos/Frame 137.svg';
import quiclySearch from '@icons/Vector (11).svg';
import { HashLink as Link } from 'react-router-hash-link';

const Header = () => {

    return(    
    
        <div className="image-container">
            <div fluid />
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
                        <Link className="header-link" to="/about">Quienes somos</Link>
                        <Link className="header-link" to="/emprendimiento">Emprendimiento Destacado</Link>
                        <Link className="header-link" to="/#categoryContainer">Categorías</Link>
                        <Link className="header-link" to="/promotions">Promo</Link>
                        <Link className="header-link" to="/contactUs">Contacto</Link>
                    </div>
                </Col>

                <Col>  
                    <div className="navbar-right">             
                        
                        <Link to="/login">
                            <button  className="buttonlogin"></button>
                        </Link>
                            <button className="buttontheme"></button>

                            <button className="buttonsearch"></button>
                    </div>     
                </Col>

            </Row>
        </div>
    
    );
}

export default Header;