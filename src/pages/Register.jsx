import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FormUser from '../components/FormUser';

import {Container} from 'react-grid';
import '../styles/Register.scss';


const Register = () => {
    return(
        <Container>
            <div className="mainContainer">
            <Header />
            <FormUser />
            <Footer />
            </div>
        </Container>
    );
}

export default Register;