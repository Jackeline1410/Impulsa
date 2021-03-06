import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import cohete from '../assets/logos/cohete.svg';
import {Row } from 'react-grid';

const ContactUs = () => {
    return(
        <div>
            <Header />,
            <h1>Contacto</h1>
            <p>Bucaramanga, Santander</p>
            <p>Carrera 27 con Calle 9 - Casona la Perla, Campus Universitario UIS</p>
            <Row>
                <p>3016292208</p>
                <p>3016292208</p>
            </Row>
            <p>contacto@impulsauis.com</p>
            <img src={cohete} alt="cohete" />
            <p>Para nosotros es un gusto atenderte, escribenos si tienes alguna inquietud </p>

            <h1>Preguntas Frecuentes</h1>
            <p>1. ¿Puedo registrar mi emprendimiento si no pertenezco a la comunidad UIS?</p>
            <p>NO, Impulsa UIS es una iniciativa para promover las empresas y emprendimientos de la comunidad UIS, por lo tanto solo personas que pertenezcan a la comunidad UIS pueden registrar sus emprendimientos o empresas.</p>
            <p>2. ¿Si mi emprendimiento no está en ninguna de las categorías del directorio puedo registrarlo?</p>
            <p>SI, si no encuentras una categoría que se ajuste a tu emprendimiento simplemente debes registrarlo en la categoría “Otros”.</p>
            <p>3. ¿La UIS tiene alguna responsabilidad con este directorio?</p>
            <p>NO, impulsa UIS es una iniciativa de ASEDUIS capitulo Bucaramanga, por lo que la Universidad Industrial de Santander (UIS), no tiene ningún tipo de responsabilidad sobre lo publicado en esta página.</p>
            <p>4. ¿Qué beneficios tengo al registrar mi emprendimiento en este directorio?</p>
            <p>Serás parte del mayor directorio interactivo de empresas y emprendimientos de la comunidad UIS, con lo cual ganaras reconocimiento y visibilidad de tu empresa o emprendimiento.</p>
            <p>5. ¿Hay que pagar algún valor por registrar el emprendimiento?</p>
            <p>NO, esto es una iniciativa que no tiene ningún costo. ASEDUIS Capitulo Bucaramanga como estamento activo y proactivo de la Comunidad Universitaria busca ayudar en el desarrollo personal, profesional y asociativo de toda la comunidad UIS.</p>
            <p>6. ¿Puede ser un emprendimiento físico o virtual?</p>
            <p>Si, se pueden registrar emprendimientos físicos o virtuales, formalizados o no.</p>
            <p>7. ¿Cómo hago para que mi emprendimiento sea destacado?</p>
            <p>Debes comunicarte con nosotros a contacto@impulsauis.com, solicitándonos ser emprendimiento destacado y nosotros nos comunicaremos.</p>
            <p>8. ¿Cuánto tiempo estará activo un emprendimiento cómo destacado?</p>
            <p>Inicialmente será por una semana, pero es algo que puede variar.</p>
            <p>9. ¿Después del registro, en cuanto tiempo se verá reflejado mi emprendimiento en la página?</p>
            <p>En máximo 96 horas hábiles serán habilitados los emprendimientos, después de que realicemos las verificaciones pertinentes.</p>
            <Footer />
        </div>
    );
}

export default ContactUs;