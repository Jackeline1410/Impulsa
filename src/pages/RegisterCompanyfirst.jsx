import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FormCompanyfirst from '../components/FormCompanyfirst';

import '../styles/RegisterCompanyfirst.scss';


const RegisterCompanyfirst = () => {
    return(
        <div>
            <Header className="header"/>
            <h1 className="titleRegisterCompanyfirst">Registro de emprendimientos</h1>
            <p className="subtitleRegisterCompanyfirst"><strong>Datos del emprendimiento/empresa</strong></p>
            <FormCompanyfirst />
            <Footer />
        </div>
    );
}

export default RegisterCompanyfirst;