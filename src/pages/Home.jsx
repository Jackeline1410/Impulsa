import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import titleParagraph from '../assets/logos/Group 102.svg';
import loading from '../assets/logos/Capa 2.svg';
import separatorSection from '../assets/icons/Vector 19.svg';
import entrepreneurMain from '../assets/logos/sdfsdfsdfsdfs 1.svg';

import { Container, Row, Col } from 'react-grid';
import logoid3co from '../assets/logos/logoid3co.svg';
import iconyoutube from '../assets/icons/iconyoutube.svg';
import { Button } from 'semantic-ui-react';
import '../styles/Home.scss';

import categorie1 from '../assets/icons/Categorie1.svg';
import categorie2 from '../assets/icons/Categorie2.svg';
import categorie3 from '../assets/icons/Categorie3.svg';
import categorie4 from '../assets/icons/Categorie4.svg';
import categorie5 from '../assets/icons/Categorie5.svg';
import categorie6 from '../assets/icons/Categorie6.svg';
import categorie7 from '../assets/icons/Categorie7.svg';


const Home = () => {
    return(
        <div >
        <Header className="header"/>

            <Container id="mainContainer" className="mainContainer">

                <Container id="aboutUs" className="aboutUs" >
                
                    <Row className="row">
                        <Col>
                            <Row>
                                <img src={titleParagraph} alt="titleParagraph" />
                            </Row>
                            <Row>
                            <p className="paragraph">Buscamos dar visibilidad a los emprendimientos y empresas de los estudiantes,
                                egresados de pregrado, posgrado y del IPRED de la UIS, siendo una vitrina virtual
                                para sus negocios. Promoviendo las conexines entre los empresarios y los 
                                diferentes públicos objetivo.
                            </p>
                            </Row>
                        </Col>
                        <Col>
                            <img className="loading" src={loading} alt="loading" />
                        </Col>
                    </Row>
        
                    
                    <div>
                        <Link to="/register">
                            <button  className="primary-button" >UNIRME</button>  
                        </Link>
                    </div>
                           
                </Container>

                    <img src={separatorSection} alt="separator section" />
                    
                <Container id="entrepeneurMain" className="entrepeneurMain">
                    <Row className="title">Emprendimiento Destacado</Row>
                    <Row className="name">ID3CO</Row>
                    <Row className="container">
                        <img className="imageid3co" src={entrepreneurMain} alt="entrepreneur main" />
                        <div className="overlay">
                            <div className="text">
                                <Row className="row-overlay">
                                    <Col>
                                        <img className="logoid3co" src={logoid3co} alt="logo id3co" />
                                    </Col>
                                    <Col>
                                        Hola somos id3co, nos dedicamos a elaborar productos que darán un toque de estilo y creatividad a los espacios de tu hogar, como homme-office, rincón green, rincón de lectura y espacios infantiles...
                                        <br></br>
                                        <img src={iconyoutube} alt="iconyoutube" />
                                        <span>Youtube</span>
                                    </Col>
                                        <p>Conéctate en nuestro en vivo para que conozcas tips de decoración <strong>www.youtube.com/id3co</strong></p>
                                </Row>                        
                            </div>
                        </div>
                    </Row>

                        <Link to="/emprendimiento">
                            <button className="primary-button login-button">CONOCE MAS</button>
                        </Link>
                </Container>
                    
                    <img src={separatorSection} alt="separator section" />
                   
                <Container id="categoryContainer" className="categoryContainer">
                    <Row className="title">Categorias</Row>
                    <Row className="categoryDescription">A continuación encontrarás las categorías de los emprendimientos disponibles</Row>

                    <Row>
                        <div className="sponsors">
                            <Col md={1}>
                                <div className="containerCategory">
                                    <Link to="/category1">
                                        <img className="imageCategory" src={categorie1} alt="categoria 1"/>
                                        <h4 className="centered">Accesorios y Joyería</h4>
                                    </Link>
                                </div>
                            </Col>
                        
                            <Col md={1}>
                                <div className="containerCategory">
                                    <Link to="/category2">
                                        <img className="imageCategory" src={categorie2} alt="categoria 2" />
                                        <h4 className="centered">Salud y Belleza</h4>
                                    </Link>
                                </div>
                            </Col>
                        
                            <Col md={1}>
                                <div className="containerCategory">
                                    <Link to="/category3">
                                        <img className="imageCategory" src={categorie3} alt="categoria 3" />
                                        <h4 className="centered">Detalles y Decoración</h4>
                                    </Link>
                                </div>
                            </Col>
                        
                            <Col md={1}>
                                <div className="containerCategory">
                                    <Link to="/category4">
                                        <img className="imageCategory" src={categorie4} alt="categoria 4" />
                                        <h4 className="centered">Educación</h4>
                                    </Link>
                                </div>
                            </Col>
                            
                            <Col md={1}>
                                <div className="containerCategory">
                                    <Link to="/category5">
                                        <img className="imageCategory" src={categorie5} alt="categoria 5" />
                                        <h4 className="centered">Energía y Minería</h4>
                                    </Link>
                                </div>
                            </Col>
                        
                            <Col md={1}>
                                <div className="containerCategory">
                                    <Link to="/category6">
                                        <img className="imageCategory" src={categorie6} alt="categoria 6" />
                                        <h4 className="centered">Fabricación de Textiles y Calzado</h4>
                                    </Link>
                                </div>
                            </Col>
                       
                            
                            <Col md={1}>
                                <div className="containerCategory">
                                    <Link to="/category7">
                                        <img className="imageCategory7" src={categorie7} alt="categoria 7" />
                                        <h4 className="centered">Infraestructura y Construcción</h4>
                                    </Link>
                                </div>
                            </Col>

                        </div>
                    </Row>
            

                    <Row>
                        <div className="sponsors">
                            <Col md={1}>
                                <div className="containerCategory">
                                    <Link to="/category8">
                                        <img className="imageCategory" src={categorie1} alt="categoria 8"/>
                                        <h4 className="centered">Muebles y Hogar</h4>
                                    </Link>
                                </div>
                            </Col>

                            <Col md={1}>
                                <div className="containerCategory">
                                    <Link to="/category9">
                                        <img className="imageCategory" src={categorie2} alt="categoria 9" />
                                        <h4 className="centered">Moda y Vestuario</h4>
                                    </Link>
                                </div>
                            </Col>

                            <Col md={1}>
                                <div className="containerCategory">
                                    <Link to="/category10">
                                        <img className="imageCategory" src={categorie3} alt="categoria 10" />
                                        <h4 className="centered">Restaurantes y Alimentación</h4>
                                    </Link>
                                </div>
                            </Col>

                            <Col md={1}>
                                <div className="containerCategory">
                                    <Link to="/category11">
                                        <img className="imageCategory" src={categorie4} alt="categoria 11" />
                                        <h4 className="centered">Servicios Profesionales o Técnicos</h4>
                                    </Link>
                                </div>
                            </Col>

                            <Col md={1}>
                                <div className="containerCategory">
                                    <Link to="/category12">
                                        <img className="imageCategory" src={categorie5} alt="categoria 12" />
                                        <h4 className="centered">Tecnología y Agroindustria</h4>
                                    </Link>
                                </div>
                            </Col>

                            <Col md={1}>
                                <div className="containerCategory">
                                    <Link to="/category13">
                                        <img className="imageCategory" src={categorie6} alt="categoria 13" />
                                        <h4 className="centered">Tutorías o Asesorías académicas</h4>
                                    </Link>
                                </div>
                            </Col>

                            <Col md={1}>
                                <div className="containerCategory"> 
                                    <Link to="/category14">
                                        <img className="imageCategory" src={categorie7} alt="categoria 14" />
                                        <h4 className="centered">Otros</h4>
                                    </Link>
                                </div>  
                            </Col>
                            
                        </div>
                    </Row>
                   

                </Container>
            </Container>

        <Footer/>
        </div>
    );
}

export default Home;