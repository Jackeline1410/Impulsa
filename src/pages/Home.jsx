import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import titleParagraph from '../assets/logos/Group 102.svg';
import loading from '../assets/logos/Capa 2.svg';
import separatorSection from '../assets/icons/Vector 19.svg';
import entrepreneurMain from '../assets/logos/sdfsdfsdfsdfs 1.svg';

import { Container, Row, Col } from 'react-grid';
import { Button } from 'semantic-ui-react';
import '../styles/Home.scss';

import categorie1 from '../assets/icons/Categorie1.svg';
import categorie2 from '../assets/icons/Categorie2.svg';
import categorie3 from '../assets/icons/Categorie3.svg';
import categorie4 from '../assets/icons/Categorie4.svg';
import categorie5 from '../assets/icons/Categorie5.svg';
import categorie6 from '../assets/icons/Categorie6.svg';
import categorie7 from '../assets/icons/Categorie7.svg';
import categorie8 from '../assets/icons/Categorie1.svg';
import categorie9 from '../assets/icons/Categorie2.svg';
import categorie10 from '../assets/icons/Categorie3.svg';
import categorie11 from '../assets/icons/Categorie4.svg';
import categorie12 from '../assets/icons/Categorie5.svg';
import categorie13 from '../assets/icons/Categorie6.svg';
import categorie14 from '../assets/icons/Categorie7.svg';


const Home = () => {
    return(
        <div>
        <Header className="header"/>

            <Container id="mainContainer" className="mainContainer">

                <Container id="aboutUs" className="aboutUs" >
                
                    <Row className="row">
                        <Col>
                            <Row>
                                <img src={titleParagraph} alt="titleParagraph" />
                            </Row>
                            <Row>
                            <p>Buscamos dar visibilidad a los emprendimientos y empresas de los estudiantes,
                                egresados de pregrado, posgrado y del IPRED de la UIS, siendo una vitrina virtual
                                para sus negocios. Promoviendo las conexines entre los empresarios y los 
                                diferentes p??blicos objetivo.
                            </p>
                            </Row>
                        </Col>
                        <Col>
                            <img className="loading" src={loading} alt="loading" />
                        </Col>
                    </Row>
                    <Row>

                        <Link to="/register">
                            <Button>
                            <input type="submit" value="UNIRME" className="primary-button add-botton"></input>
                            </Button>
                        </Link>
                           
                    </Row>


                </Container>

                    <img src={separatorSection} alt="separator section" />
                    

                <Container id="entrepeneurMain" className="entrepeneurMain">
                    <Row><h2>Emprendimiento Destacado</h2></Row>
                    <Row><h3>ID3CO</h3></Row>
                    <Row><img src={entrepreneurMain} alt="entrepreneur main" /></Row>

                    <Row>
                        <Link to="/emprendimiento">
                            <Button>
                            <button type="submit" value="CONOCE MAS" className="primary-button add-botton"></button>
                            </Button>
                        </Link>
                    </Row>

                </Container>
                    
                    <img src={separatorSection} alt="separator section" />
                   
                <Container id="categoryContainer" className="categoryContainer">
                    <Row className="categoryTitle"><h2>Categorias</h2></Row>
                    <Row className="categoryDescription"><p>A continuaci??n encontrar??s las categor??as de los emprendimientos disponibles</p></Row>

                    <Row className="categories">
                        
                            <Col className="categorie1">
                            <h4 >Accesorios y Joyer??a</h4>
                            <img src={categorie1} alt="categoria 1"/>
                            </Col>
                            
                            <Col>
                            <h4>Salud y Belleza</h4>
                            <img src={categorie2} alt="categoria 2" />
                            </Col>

                            
                            <Col>
                            <h4>Detalles y Decoraci??n</h4>
                            <img src={categorie3} alt="categoria 3" />
                            </Col>

                            <Col>
                            <h4>Educaci??n</h4>
                            <img src={categorie4} alt="categoria 4" />
                            </Col>

                            
                            <Col>
                            <h4>Energ??a y Miner??a</h4>
                            <img src={categorie5} alt="categoria 5" />
                            </Col>
                            

                            <Col>
                            <h4>Fabricaci??n de Textiles y Calzado</h4>
                            <img src={categorie6} alt="categoria 6" />
                            </Col>
                            
                            <Col>
                            <h4>Infraestructura</h4>
                            <img src={categorie7} alt="categoria 7" />
                            </Col>
                    </Row>
                                   

                    <Row className="categories2">

                        <Col>
                            <h4>Muebles y Hogar</h4>
                            <img src={categorie8} alt="categoria 8" />
                        </Col>

                        <Col>
                            <h4>Moda y Vestuario</h4>
                            <img src={categorie9} alt="categoria 9" />
                        </Col>

                        <Col>
                            <h4>Restaurantes y Alimentaci??n</h4>
                            <img src={categorie10} alt="categoria 10" />
                        </Col>

                        <Col>
                            <h4>Servicios profesionales o T??cnicos</h4>
                            <img src={categorie11} alt="categoria 11" />
                        </Col>

                        <Col>
                            <h4>Tecnolog??a y Agroindustria</h4>
                            <img src={categorie12} alt="categoria 12" />
                        </Col>

                        <Col>
                            <h4>Tutor??as o Asesor??as acad??micas</h4>
                            <img src={categorie13} alt="categoria 13" />
                        </Col>

                        <Col>
                            <h4>Otros</h4>
                            <img src={categorie14} alt="categoria 14" />
                        </Col>

                    </Row>
                </Container>
            </Container>

        <Footer />
        </div>
    );
}

export default Home;