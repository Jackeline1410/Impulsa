import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

import {Row } from 'react-grid';

import '../styles/ContactUs.scss';
import cohete from '../assets/logos/cohete.svg';
import iconlocationimpulsa from '../assets/icons/iconlocationimpulsa.svg';
import iconemail from '../assets/icons/iconemail.svg';
import iconphone from '../assets/icons/iconphone.svg';
import iconwhatsapp from '../assets/icons/iconwhatsapp.svg';


const ContactUs = () => {
    return(
        <div>
            <div>
                <Header className="header"/>
                <h1 className="titleContactUs">Contacto</h1>

                <Row className="rowContactUs">
                    <img className="imglocationimpulsa" src={iconlocationimpulsa} alt="icon location impulsa" />
                    <p className="paragraphlocation">BUCARAMANGA, SANTANDER</p>
                </Row>
                
                <Row className="rowContactUs">
                    <p className="paragraph">Carrera 27 con Calle 9 - Casona la Perla, Campus Universitario UIS</p>
                </Row>
                    
                <Row className="rowContactUs">
                    <img className="iconphoneContactUs" src={iconphone} alt="icon phone" />
                    <p className="phonenumber">3016292208</p>
                    <img className="iconwhatsappContactUs" src={iconwhatsapp} alt="icon whatsapp" />
                    <p className="whatsnumber">3016292208</p>
                </Row>

                <Row className="rowContactUs">
                    <img className="iconemailContactUs" src={iconemail} alt="icon email" />
                    <p className="emailContactUs">contacto@impulsauis.com</p>
                </Row>

                <Row className="rowContactUs">
                    <img src={cohete} alt="cohete" />
                </Row>
                
                <Row className="rowContactUs">
                    <p className="emailContactUs"><strong>Para nosotros es un gusto atenderte, escribenos si tienes alguna inquietud </strong></p>
                </Row>
                

                <h1 className="titleContactUs">Preguntas Frecuentes</h1>
                <p className="paragraph-questions">1. ¿Puedo registrar mi emprendimiento si no pertenezco a la comunidad UIS?</p>
                <p className="paragraph-answers"><strong>NO</strong>, Impulsa UIS es una iniciativa para promover las empresas y emprendimientos de la comunidad UIS, por lo tanto solo personas que pertenezcan a la comunidad UIS pueden registrar sus emprendimientos o empresas.</p>
                <p className="paragraph-questions"> 2. ¿Si mi emprendimiento no está en ninguna de las categorías del directorio puedo registrarlo?</p>
                <p className="paragraph-answers"><strong>SI</strong>, si no encuentras una categoría que se ajuste a tu emprendimiento simplemente debes registrarlo en la categoría “Otros”.</p>
                <p className="paragraph-questions">3. ¿La UIS tiene alguna responsabilidad con este directorio?</p>
                <p className="paragraph-answers"><strong>NO</strong>, impulsa UIS es una iniciativa de ASEDUIS capitulo Bucaramanga, por lo que la Universidad Industrial de Santander (UIS), no tiene ningún tipo de responsabilidad sobre lo publicado en esta página.</p>
                <p className="paragraph-questions">4. ¿Qué beneficios tengo al registrar mi emprendimiento en este directorio?</p>
                <p className="paragraph-answers">Serás parte del mayor directorio interactivo de empresas y emprendimientos de la comunidad UIS, con lo cual ganaras reconocimiento y visibilidad de tu empresa o emprendimiento.</p>
                <p className="paragraph-questions">5. ¿Hay que pagar algún valor por registrar el emprendimiento?</p>
                <p className="paragraph-answers"><strong>NO</strong>, esto es una iniciativa que no tiene ningún costo. ASEDUIS Capitulo Bucaramanga como estamento activo y proactivo de la Comunidad Universitaria busca ayudar en el desarrollo personal, profesional y asociativo de toda la comunidad UIS.</p>
                <p className="paragraph-questions">6. ¿Puede ser un emprendimiento físico o virtual?</p>
                <p className="paragraph-answers"><strong>Si</strong>, se pueden registrar emprendimientos físicos o virtuales, formalizados o no.</p>
                <p className="paragraph-questions">7. ¿Cómo hago para que mi emprendimiento sea destacado?</p>
                <p className="paragraph-answers">Debes comunicarte con nosotros a contacto@impulsauis.com, solicitándonos ser emprendimiento destacado y nosotros nos comunicaremos.</p>
                <p className="paragraph-questions">8. ¿Cuánto tiempo estará activo un emprendimiento cómo destacado?</p>
                <p className="paragraph-answers">Inicialmente será por una semana, pero es algo que puede variar.</p>
                <p className="paragraph-questions">9. ¿Después del registro, en cuanto tiempo se verá reflejado mi emprendimiento en la página?</p>
                <p className="paragraph-answers">En máximo 96 horas hábiles serán habilitados los emprendimientos, después de que realicemos las verificaciones pertinentes.</p>

                <Footer />
                </div>
        </div> 
        
    );
}

export default ContactUs;