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
import Category1 from '../pages/Category1';
import Category2 from '../pages/Category2';
import Category3 from '../pages/Category3';
import Category4 from '../pages/Category4';
import Category5 from '../pages/Category5';
import Category6 from '../pages/Category6';
import Category7 from '../pages/Category7';
import Category8 from '../pages/Category8';
import Category9 from '../pages/Category9';
import Category10 from '../pages/Category10';
import Category11 from '../pages/Category11';
import Category12 from '../pages/Category12';
import Category13 from '../pages/Category13';
import Category14 from '../pages/Category14';

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
                <Route exact path="/category1" element={<Category1 />} />
                <Route exact path="/category2" element={<Category2 />} />
                <Route exact path="/category3" element={<Category3 />} />
                <Route exact path="/category4" element={<Category4 />} />
                <Route exact path="/category5" element={<Category5 />} />
                <Route exact path="/category6" element={<Category6 />} />
                <Route exact path="/category7" element={<Category7 />} />
                <Route exact path="/category8" element={<Category8 />} />
                <Route exact path="/category9" element={<Category9 />} />
                <Route exact path="/category10" element={<Category10 />} />
                <Route exact path="/category11" element={<Category11 />} />
                <Route exact path="/category12" element={<Category12 />} />
                <Route exact path="/category13" element={<Category13 />} />
                <Route exact path="/category14" element={<Category14 />} />

                <Route path="*" element={<NotFound/>} />
                </Routes>
        
        </BrowserRouter>
    );
}

export default App;