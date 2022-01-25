import React from 'react';
import { Container, Col} from 'react-grid';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Logo from '../assets/logos/Logo.svg';
import logoaseduis from '../assets/logos/Capa 1.svg';
import '../styles/About.scss';

const About = () => {
    return(
            
        <Container>
                <Header  className="header"/>
                <div className="mainContainer">
                    <h2 className="title">Quienes somos</h2>
                    <p className="paragraph">ImpulsaUIS es una iniciativa de la Asociación de Egresados de la Universidad Industrial de Santander capítulo Bucaramanga; que busca el desarrollo personal, profesional y asociativo del Egresado con su Alma Máter</p>
                        <Col className="column">
                            <img className="logoimpulsa" src={Logo} alt="logo" />
                        </Col>
                        
                    <p className="paragraph">Con ImpulsaUIS se proyecta que todos los egresados de la UIS sean actores protagónicos en el desarrollo de la reactivación económica de la región y del país. Generando vínculos de unión con la comunidad UIS para lograr el fortalecimiento y crecimiento del desarrollo social.</p>
                    
                        <Col className="column">
                        <img className="logoaseduis" src={logoaseduis} alt="logoaseduis" />
                        </Col>
                    <p className="paragraph">El objetivo de ASEDUIS Capítulo Bucaramanga es unir en un solo directorio a nivel nacional a todos los egresados de la UIS, quienes con su experiencia puedan contribuir y apoyar a nuestra alma mater en lograr los mejores programas para nuestra región y el país; buscando excelentes resultados en el área científica, ingenieril, social y de servicios; basados en principios y valores.</p>
                    <p><strong>JUNTA DIRECTIVA DE ASEDUIS</strong></p>
                    <p><strong>FUNCIONARIOS DE ASEDUIS</strong></p>
                    <p><strong>EQUIPO DE DISEÑO Y DESARROLLO DE IMPULSA UIS</strong></p>
                    </div>
                    
                <Footer />
        </Container>
    );
}

export default About;