import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FormUser from '../components/FormUser';

import {Container} from 'react-grid';
import '../styles/Register.scss';


const Register = () => {
    return(
        
            <div>
           
            <Header className="header"/>
            <Container>
                <FormUser className="formuserregister" />
            </Container>
            <Footer />

            </div>
        
    );
}

export default Register;