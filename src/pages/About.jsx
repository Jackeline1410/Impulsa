import React from 'react';
import { Container, Col, Row} from 'react-grid';
import Header from '../components/Header';
import Footer from '../components/Footer';

import Logo from '../assets/logos/Logo.svg';
import logoaseduis from '../assets/logos/Capa 1.svg';
import presidente from '../assets/images/EdgarRamirez.png';
import vicepresidente from '../assets/images/GaldysGarcia.png';
import secretario from '../assets/images/mario-betancourt.png';
import tesorero from '../assets/images/JorgeAmado.png';
import vocal1 from '../assets/images/JairoOrdonez.png';
import vocal2 from '../assets/images/HermanRodriguez.png';
import vocal3 from '../assets/images/RamiroPinzon.png';
import vocal4 from '../assets/images/NestorRaul.png';
import vocal5 from '../assets/images/AristoboloBejarano.png';
import fiscal from '../assets/images/JairoCorzo.png';
import directora from '../assets/images/NadiaRuiz.png';
import asistentelogistico from '../assets/images/FreddyAruas.png';
import asistentemercadeo from '../assets/images/LuzDary.png';
import contadora from '../assets/images/AmiraCoronel.png';
import productleader from '../assets/images/MarioBetancourt.png';
import productmanager from '../assets/images/JackelinJaimes.png';
import teachlead from '../assets/images/HernanCarreno.png';
import frontenddeveloper from '../assets/images/CarlosSanjuan.png';
import designer from '../assets/images/AndreaRangel.png';

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

                        <Container className="container">

                            <div className="card">
                                <img className="photo" src={presidente} alt="presidente junta" />
                                <p className="information"><strong>Edgar Humberto Ramírez Rojas</strong></p>
                                <p className="information">Presidente</p>
                                <p className="information">Ing. Mecánico</p>
                            </div>

                            <div className="card">
                                <img className="photo" src={vicepresidente} alt="vicepresidente junta" />
                                <p className="information"><strong>Gladys Stella García Ojeda</strong></p>
                                <p className="information">Vicepresidente</p>
                                <p className="information">Ing. Industrial</p>
                            </div>
                                
                            <div className="card">
                                <img className="photo" src={secretario} alt="secretario junta" />
                                <p className="information"><strong>Mario Andrés Betancurt</strong></p>
                                <p className="information">Secretario</p>
                                <p className="information">Ing. Civil</p>
                            </div>

                            <div className="card">
                                <img className="photo" src={tesorero} alt="tesorero junta" />
                                <p className="information"><strong>Jorge Enrique Amado</strong></p>
                                <p className="information">Tesorero</p>
                                <p className="information">Especialista en evaluación y gerencia de proyectos</p>
                            </div>
                                
                            <div className="card">
                                <img className="photo" src={vocal1} alt="vocal 1 junta" />
                                <p className="information"><strong>Jairo Enrique Ordoñez Torres</strong></p>
                                <p className="information">Vocal</p>
                                <p className="information">Ing. Civil</p>
                            </div>

                            <div className="card">
                                <img className="photo" src={vocal2} alt="vocal 2 junta" />
                                <p className="information"><strong>Herman Rodríguez Díaz</strong></p>
                                <p className="information">Vocal</p>
                                <p className="information">Médico</p>
                            </div>

                            <div className="card">
                                <img className="photo" src={vocal3} alt="vocal 3 junta" />
                                <p className="information"><strong>Ramiro Pinzón Asela</strong></p>
                                <p className="information">Vocal</p>
                                <p className="information">Especialista en Instituciones Jurídicas</p>
                            </div>
                                
                            <div className="card">
                                <img className="photo" src={vocal4} alt="vocal 4 junta" />
                                <p className="information"><strong>Nestor Raúl D'croz Torres</strong></p>
                                <p className="information">Vocal</p>
                                <p className="information">Ing. Mecánico</p>
                            </div>

                            <div className="card">
                                <img className="photo" src={vocal5} alt="vocal 5 junta" />
                                <p className="information"><strong>Aristobulo Bejarano Wallens</strong></p>
                                <p className="information">Vocal</p>
                                <p className="information">Ing. Petróleos</p>
                            </div>
                                
                            <div className="card">
                                <img className="photo" src={fiscal} alt="fiscal junta" />
                                <p className="information"><strong>Jairo Corzo Gómez</strong></p>
                                <p className="information">Fiscal</p>
                                <p className="information">Magister en derechos humanos</p>
                            </div>
                        
                        </Container>
                   
                   
                    <p><strong>FUNCIONARIOS DE ASEDUIS</strong></p>

                        <Container className="container">

                            <div className="card">
                                <img className="photo" src={directora} alt="directora" />
                                <p className="information"><strong>Nadia Ruiz Montero</strong></p>
                                <p className="information">Directora Ejecutiva</p>
                                <p className="information">Ing. Sistemas</p>
                            </div>

                            <div className="card">
                                <img className="photo" src={asistentelogistico} alt="asistente logistico" />
                                <p className="information"><strong>Freddy Arias Vega</strong></p>
                                <p className="information">Asistente de logística</p>
                                <p className="information">Técnico en Mecánica general de Mantenimiento Industrial</p>
                            </div>
                                
                            <div className="card">
                                <img className="photo" src={asistentemercadeo} alt="asistente mercadeo" />
                                <p className="information"><strong>Luz Dary Abaunza Acero</strong></p>
                                <p className="information">Asistente de mercadeo</p>
                                <p className="information">Profesional en Gestión Empresarial</p>
                            </div>

                            <div className="card">
                                <img className="photo" src={contadora} alt="contadora" />
                                <p className="information"><strong>Amira Coronel</strong></p>
                                <p className="information">Contadora</p>
                                <p className="information">Contador público</p>
                            </div>
                            

                        </Container>

                    <p><strong>EQUIPO DE DISEÑO Y DESARROLLO DE IMPULSA UIS</strong></p>

                        <Container className="container">

                            <div className="card">
                                <img className="photo" src={productleader} alt="product leader" />
                                <p className="information"><strong>Mario Betancourt P</strong></p>
                                <p className="information">Product Leader</p>
                                <p className="information">Ing. Civil</p>
                            </div>

                            <div className="card">
                                <img className="photo" src={productmanager} alt="product manager" />
                                <p className="information"><strong>Jackeline Jaimes O</strong></p>
                                <p className="information">Product Manager</p>
                                <p className="information">Ingeniera Metalúrgica</p>
                            </div>
                                    
                            <div className="card">
                                <img className="photo" src={teachlead} alt="teach lead" />
                                <p className="information"><strong>Hernan Carreño L</strong></p>
                                <p className="information">Teach Lead</p>
                                <p className="information">Msc en ciencias de la computación</p>
                            </div>

                            <div className="card">
                                <img className="photo" src={frontenddeveloper} alt="frontend developer" />
                                <p className="information"><strong>Carlos Sanjuan A</strong></p>
                                <p className="information">Frontend developer</p>
                                <p className="information">Est Ingeniería de Sistemas</p>
                            </div>
                                
                            <div className="card">
                                <img className="photo" src={designer} alt="designer" />
                                <p className="information"><strong>Andrea Rángel F</strong></p>
                                <p className="information">Diseñadora</p>
                                <p className="information">Est de Diseño Industrial</p>
                            </div>

                            </Container>




                    </div>
                    
                <Footer />
        </Container>
    );
}

export default About;