import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FormCompany1 from '../components/FormCompany1';


const RegisterCompany = () => {
    return(
        <div>
            <Header />
            <h1>Registro de Emprendimientos</h1>
            <p><strong>Datos del emprendimiento/empresa</strong></p>
            <FormCompany1 />
            <Footer />
        </div>
    );
}

export default RegisterCompany;