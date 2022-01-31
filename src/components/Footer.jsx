import React from 'react';
import { Container, Row, Col } from 'react-grid';

import '../styles/Footer.scss';
import footer from '@icons/footer.svg';
import logoface from '@logos/Vector (2).svg';
import logoinsta from '@logos/Vector (3).svg';
import support from '@logos/support.svg';
import aseduis from '@logos/aseduis.svg';


const Footer = () => {
    return(
        <Container className="imageContainer">
           
            <Container fluid />
                
                <Row>
                    <Col md={6}>
                        <div className="socials">
                            <Row>
                                <h2 className="titles">REDES SOCIALES:</h2>
                            </Row>
                            <Row>
                                <a href='https://www.facebook.com/ImpulsaUIS' target="_blank" >
                                    <img src={logoface} alt="facebook" />
                                    <p className="p-face">Impulsa UIS</p>
                                </a>
                            
                                <a href='https://www.instagram.com/impulsauis/' target="_blank">
                                    <img src={logoinsta} alt="instagram" />
                                    <p className="p-insta">@impulsauis</p>
                                </a>
                            </Row>
                        </div>
                    </Col>
                    

                    <Col md={6}>
                        <div className="sponsors">
                            <Row>
                                <Col>
                                    <div className="titles">APOYA:</div>
                                    <a href='https://jejaimes.com.co/' target="_blank">
                                        <img src={support} alt="support" />
                                    </a>
                                    
                                </Col>
                                <Col>
                                    <div className="titles">ORGANIZA:</div>
                                    <a href='https://www.aseduis.com/Bucaramanga/' target="_blank">
                                    <img src={aseduis} alt="aseduis" />
                                    </a>
                                </Col>
                            </Row>   
                        </div>
                    </Col>

                </Row>
            </Container>
    );
}

export default Footer;