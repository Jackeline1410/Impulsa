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
        <div className="footer">
            
               <div className="socialnetworks">
                    <p className="titles">REDES SOCIALES:</p>
                        <a href='https://www.facebook.com/ImpulsaUIS' target="_blank" >
                            <img className="logoface" src={logoface} alt="facebook" />
                            <div className="p-face">Impulsa UIS</div>
                        </a>
                        <a href='https://www.instagram.com/impulsauis/' target="_blank">
                            <img className="logo-insta" src={logoinsta} alt="instagram" />
                            <div className="p-insta">@impulsauis</div>
                        </a>
                </div>

                <Col md={4}></Col>

                <div className="sponsor">
                        <p className="titles">APOYA:</p>
                    
                        <a href='https://jejaimes.com.co/' target="_blank">
                            <img className="imagesupportsponsor" src={support} alt="support" />
                        </a>
                </div>

               
                <div className="support">
                        <p className="titles">ORGANIZA:</p>
                        <a href='https://www.aseduis.com/Bucaramanga/' target="_blank">
                            <img className="imageaseduissupport" src={aseduis} alt="aseduis" />
                        </a>
                </div>     

    
        </div>       
                      
           

            
    );
}

export default Footer;