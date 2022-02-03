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
            
               <div className="redsocials">
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
                <div className="sponsor">
                        <div className="titles">APOYA:</div>
                    
                        <a href='https://jejaimes.com.co/' target="_blank">
                            <img className="imagesupport" src={support} alt="support" />
                        </a>
                </div>
                <div className="support">

                        <div className="titles">ORGANIZA:</div>
                        <a href='https://www.aseduis.com/Bucaramanga/' target="_blank">
                            <img className="imageaseduis" src={aseduis} alt="aseduis" />
                        </a>
                </div>     

    
        </div>       
                      
           

            
    );
}

export default Footer;