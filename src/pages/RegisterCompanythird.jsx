import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {Container} from 'react-grid';
import FormCompanythird from '../components/FormCompanythird';

import '../styles/RegisterCompanythird.scss';

const RegisterCompanythird = () => {
    return(
            <div>
                <Header className="header" />
                <h1 className="titleRegisterCompanythird">Registro de emprendimientos</h1>
                <FormCompanythird />
                <Footer />
            </div>
        
    );
}

export default RegisterCompanythird;