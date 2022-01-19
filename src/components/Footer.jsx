import React from 'react';
import { Container, Row, Col } from 'react-grid';
import '../styles/Footer.scss';
import logoface from '@logos/Vector (2).svg';
import logoinsta from '@logos/Vector (3).svg';
import support from '@logos/support.svg';
import aseduis from '@logos/aseduis.svg';

const Footer = () => {
    return(
        <Container className="footer">
            <Container fluid />
                <Row>
                    <Col>
                    <div className="socials">
                    <h2 className="titles">REDES SOCIALES:</h2>
                    <img src={logoface} alt="facebook" />
                    <p className="p-face">Impulsa UIS</p>
                    </div>
                    </Col>
                    
                    <Col>
                    <div>
                    <img src={logoinsta} alt="instagram" />
                    <p className="p-insta">@impulsauis</p>
                    </div>
                    </Col>

                    <Col></Col>

                    <Col>
                        <div className="sponsors">
                        <p className="titles">APOYA:</p>
                        <img src={support} alt="support" />
                        </div>
                    </Col>
                    
                    <Col>
                        <div>
                        <p className="titles">ORGANIZA:</p>
                        <img src={aseduis} alt="aseduis" />
                        </div>
                    </Col>
                </Row>
            </Container>
    );
}

export default Footer;