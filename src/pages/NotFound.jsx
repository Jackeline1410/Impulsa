import React from 'react';
import {Container} from 'react-grid';
import Header from '../components/Header';
import Footer from '../components/Footer';

import '../styles/NotFound.scss';
import logoerror from '../assets/logos/error.svg';

const NotFound = () => {
    return(
        <div>
            <Header className="header" />
            <h1 className="titleNotFound">Error 404</h1>
            <Container className="errorcontenedor">
            <img className="errornotfound" src={logoerror} alt="not found" />
            </Container>
            <p className="paragraphNotFound">La página que estás buscando no existe o ha ocurrido otro error</p>
            <Footer />
        </div>
    );
}

export default NotFound;