import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Logo from '../assets/logos/Logo.svg';
import logoaseduis from '../assets/logos/Capa 1.svg';

const About = () => {
    return(
        <div>
            <Header  className="header"/>,
                <h2>Quienes somos</h2>
                <p>ImpulsaUIS es una iniciativa de la Asociación de Egresados de la Universidad Industrial de Santander capítulo Bucaramanga; que busca el desarrollo personal, profesional y asociativo del Egresado con su Alma Máter</p>
                <img src={Logo} alt="logo" />
                <p>Con ImpulsaUIS se proyecta que todos los egresados de la UIS sean actores protagónicos en el desarrollo de la reactivación económica de la región y del país. Generando vínculos de unión con la comunidad UIS para lograr el fortalecimiento y crecimiento del desarrollo social.</p>
                <img src={logoaseduis} alt="logoaseduis" />
                <p>El objetivo de ASEDUIS Capítulo Bucaramanga es unir en un solo directorio a nivel nacional a todos los egresados de la UIS, quienes con su experiencia puedan contribuir y apoyar a nuestra alma mater en lograr los mejores programas para nuestra región y el país; buscando excelentes resultados en el área científica, ingenieril, social y de servicios; basados en principios y valores.</p>
                <h2>JUNTA DIRECTIVA DE ASEDUIS</h2>
                <br></br>
                <h2>FUNCIONARIOS DE ASEDUIS</h2>
                <br></br>
                <h2>EQUIPO DE DISEÑO Y DESARROLLO DE IMPULSA UIS</h2>

            <Footer />
        </div>
    );
}

export default About;