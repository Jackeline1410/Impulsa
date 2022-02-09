import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {Row} from 'react-grid';
import nopromos from '../assets/logos/Capa 2.svg';
import '../styles/Promotions.scss';

const Promotions = () => {
    return(
        <div>
                <Header className="header"/>
               
                <h2 className="titlePromo">Promo</h2>
                <p className="paragraphdescriptionPromo">A continuación encontrarás las promos disponibles por categoría de emprendimiento</p>

                <div>
                    <img className="noPromo" src={nopromos} alt="img no-promos" />
                </div>
                
                <p className="paragraphdescriptionPromo">Actualmente no hay promociones disponibles, espéralas muy pronto</p>
                
                <Footer />
        </div>      
    );
}

export default Promotions;