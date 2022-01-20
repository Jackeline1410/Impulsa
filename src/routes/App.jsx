import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../containers/Login';
import RecoveryPassword from '../containers/RecoveryPassword';
import Home from '../pages/Home';
import About from '../pages/About';
import Emprendimiento from '../pages/Emprendimiento';
import Promotions from '../pages/Promotions';
import ContactUs from '../pages/ContactUs';
import NotFound from '../pages/NotFound';
import Register from '../pages/Register';
import RegisterCompany from '../pages/RegisterCompany';
import RegisterCompany2 from '../pages/RegisterCompany2';
import RegisterCompany3 from '../pages/RegisterCompany3';
import Perfil from '../pages/Perfil';
import '../styles/global.scss';

const App = () => {
    return(
        <BrowserRouter>
           
                <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/emprendimiento" element={<Emprendimiento />} />
                <Route exact path="/promotions" element={<Promotions />} />
                <Route exact path="/contactUs" element={<ContactUs />} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/register" element={<Register />} />
                <Route exact path="/registercompany" element={<RegisterCompany />} />
                <Route exact path="/registercompany2" element={<RegisterCompany2 />} />
                <Route exact path="/registercompany3" element={<RegisterCompany3 />} />
                <Route exact path="/recovery-password" element={<RecoveryPassword />} />
                <Route exact path="/perfil" element={<Perfil />} />
                <Route path="*" element={<NotFound/>} />
                </Routes>
        
        </BrowserRouter>
    );
}

export default App;