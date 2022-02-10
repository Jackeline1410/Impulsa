import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FormCompanysecond from '../components/FormCompanysecond';

import '../styles/RegisterCompanysecond.scss';

const RegisterCompanysecond = () => {
    return(
        <div>
            <Header className="header"/>
            <h1 className="titleRegisterCompanysecond">Registro de emprendimientos</h1>
            <FormCompanysecond />
            <Footer />
        </div>
    );
}

export default RegisterCompanysecond;