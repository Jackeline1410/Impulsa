import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import logoid3co from '../assets/logos/logoid3co.svg';

const Emprendimiento = () => {
    return(
        <div>
            <Header />,
            <h2>Emprendimiento destacado</h2>
            <img src={logoid3co} alt="logoid3co" />
            <h5>Decoración para el hogar y fiestas</h5>
            <p>Bucaramanga, Santander</p>
            <p>Envíos Nacionales</p>
            <p>ENVÍOS NACIONALES</p>
            <p>Hola somos Id3co, nos dedicamos a elaborar productos que darán estilo y creatividad a los espacios de tu hogar como oficina rincón green, rincón de lectura y espacios infantiles. Tenemos ilustraciones, materas, artículos deco infantil; además podrás encontrar anchetas de regalo que harán más fácil la experiencia de dar un detalle a los que más quieres. Para celebrar tenemos kits temáticos para todas las fechas especiales, cumpleaños, navidad, etc. Tenemos envíos a todo el país, despachamos desde Medellín. Te invitamos a seguirnos y a conocer todos nuestros productos.</p>
            <p>Nuestros productos son personalizados y de acuerdo a la tematica elegida podemos estimar un precio para cada uno de ellos. Pregunta por el que sea de tu interés</p>
            <Footer />
        </div>
    );
}

export default Emprendimiento;
