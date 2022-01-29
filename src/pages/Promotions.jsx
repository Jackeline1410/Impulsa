import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {Container} from 'react-grid';

import '../styles/Promotions.scss';

const Promotions = () => {
    return(
        <Container>
            <div className="mainContainer">
            <Header />
            <h2 className="title">Promo</h2>
            <p className="paragraph">A continuación encontrarás las promos disponibles por categoría de emprendimiento</p>
            <Footer />
            </div>
        </Container>
    );
}

export default Promotions;