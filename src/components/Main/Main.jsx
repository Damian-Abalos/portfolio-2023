import React, { useRef, useEffect, useState } from 'react'
import './Main.css'
import Proyectos from '../Proyectos/Proyectos'
import Proyectos2 from '../Proyectos/Proyectos2'
import Navbar from '../Navbar/Navbar'
import Contacto from '../Contacto/Contacto'
import Perfil from '../Perfil/Perfil'

const Main = () => {

    const scrollContainerRef = useRef(null);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [activeClass, setActiveClass] = useState('');

    useEffect(() => {
        const scrollContainer = scrollContainerRef.current;

        const handleScroll = () => {
            // Espera un momento (por ejemplo, 100ms) para asegurarte de que el efecto de "scroll snapping" se complete
            setTimeout(() => {
                const scrollTop = scrollContainer.scrollTop;
                setScrollPosition(scrollTop);
                
                // Determina la clase activa en función de la posición del scroll
                if (scrollTop >= 0 && scrollTop <= 50 ) {
                    setActiveClass('active-div1');
                } else if (scrollTop >= 857 && scrollTop <= 1945) {
                    setActiveClass('active-div2');
                } else if (scrollTop >= 2500 && scrollTop <= 2898) {
                    setActiveClass('active-div3');
                } else if (scrollTop >= 3400 && scrollTop <= 3839) {
                    setActiveClass('active-div4');
                } else if (scrollTop >= 4200 && scrollTop <= 4780) {
                    setActiveClass('active-div5');
                } else {
                    setActiveClass('');
                }

            }, 100);
        };

        scrollContainer.addEventListener('scroll', handleScroll);

        return () => {
            scrollContainer.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // console.log(scrollPosition);
    return (
        <div className='contenido row' id='contenido'>
            <Navbar
                active={activeClass}
            />

            <div ref={scrollContainerRef} className="scroll">

                <div id="section1" className='div-item'>
                    <Perfil />
                </div>

                <div id="section2" className='div-item'>
                    <h4 className="section-header">Proyectos</h4>
                    <p className='text-center mb-0' style={{height:'3%'}}>(1/2)</p>
                    <Proyectos />
                </div>
                <div id="section2-b" className='div-item'>
                    <h4 className="section-header">Proyectos</h4>
                    <p className='text-center mb-0' style={{height:'3%'}}>(2/2)</p>
                    <Proyectos2 />
                </div>

                <div id="section3" className='div-item'>
                    <h4 className="section-header" style={{height:'15%'}}>Lenguajes y herramientas</h4>
                    <div className='row m-auto justify-content-evenly' style={{height:'85%'}}>
                        <div className='col-12 herramientas frontend'>
                            <h5 className='text-center'>Front-end</h5>
                            <div className='herramientas-subdiv'>
                                <p>
                                    <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" /> </a>
                                    <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" /> </a>
                                    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" /> </a>
                                    <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" /> </a>
                                    <a href="https://nextjs.org/" target="_blank" rel="noreferrer"> <img src="https://cdn.worldvectorlogo.com/logos/nextjs-2.svg" alt="nextjs" /> </a>
                                    <a href="https://getbootstrap.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="bootstrap" /> </a>
                                    <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="tailwind" /> </a>
                                    <a href="https://sass-lang.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg" alt="sass" /> </a>
                                </p>
                            </div>
                        </div>
                        <div className='col-12 herramientas backend'>
                            <h5>Back-end</h5>
                            <div className='herramientas-subdiv'>
                                <p>
                                    <a href="https://nodejs.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" /> </a>
                                    <a href="https://expressjs.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" /> </a>
                                    <a href="https://www.php.net" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg" alt="php" /> </a>
                                    <a href="https://nextjs.org/" target="_blank" rel="noreferrer"> <img src="https://cdn.worldvectorlogo.com/logos/nextjs-2.svg" alt="nextjs" /> </a>
                                    <a href="https://firebase.google.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" alt="firebase" /> </a>
                                    <a href="https://mariadb.org/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/mariadb/mariadb-icon.svg" alt="mariadb" /> </a>
                                    <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" /> </a>
                                    <a href="https://www.mysql.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" alt="mysql" /> </a>
                                    <a href="https://www.sqlite.org/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/sqlite/sqlite-icon.svg" alt="sqlite" /> </a>
                                    <a href="https://www.postgresql.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" alt="postgresql" /> </a>
                                    <a href="https://redis.io" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original-wordmark.svg" alt="redis" /> </a>
                                    <a href="https://postman.com" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="postman" /> </a>
                                </p>
                            </div>
                        </div>
                        <div className='col-12 herramientas otros'>
                            <h5>Otros</h5>
                            <div className='herramientas-subdiv'>
                                <p >
                                    <a href="https://reactnative.dev/" target="_blank" rel="noreferrer"> <img src="https://reactnative.dev/img/header_logo.svg" alt="reactnative" /> </a>
                                    <a href="https://flutter.dev" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg" alt="flutter" /> </a>
                                    <a href="https://www.electronjs.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/electron/electron-original.svg" alt="electron" /> </a>
                                    <a href="https://git-scm.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" /> </a>
                                    <a href="https://www.figma.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg" alt="figma" /> </a>
                                    <a href="https://www.adobe.com/in/products/illustrator.html" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/adobe_illustrator/adobe_illustrator-icon.svg" alt="illustrator" /> </a>
                                    <a href="https://www.photoshop.com/en" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/photoshop/photoshop-line.svg" alt="photoshop" /> </a>
                                    <a href="https://www.arduino.cc/" target="_blank" rel="noreferrer"> <img src="https://cdn.worldvectorlogo.com/logos/arduino-1.svg" alt="arduino" /> </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>



                <div id="section4" className='div-item'>
                    <h4 className="section-header">Certificados</h4>
                    <div className="d-flex div-certificados">
                        <div className="div-certificado">
                            <img src="https://i.ibb.co/sKhhNfz/certificado-desarrollo-web-coderhose.png" alt="certificado-coder" className="cursor-pointer img-certificado" data-bs-toggle="modal" data-bs-target="#desarrollo-web" style={{ cursor: 'pointer' }} />
                            <div className="modal fade modal-image" id="desarrollo-web" tabIndex="-1" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-body">
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            <img src="https://i.ibb.co/sKhhNfz/certificado-desarrollo-web-coderhose.png" alt="" className="d-block w-100 img-certificado" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="div-certificado">
                            <img src="https://i.ibb.co/ncXqHMM/certificado-js-coderhose.png" alt="certificado-coder" className="cursor-pointer img-certificado" data-bs-toggle="modal" data-bs-target="#js" style={{ cursor: 'pointer' }} />
                            <div className="modal fade modal-image" id="js" tabIndex="-1" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-body">
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            <img src="https://i.ibb.co/ncXqHMM/certificado-js-coderhose.png" alt="" className="d-block w-100 img-certificado" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="div-certificado">
                            <img src="https://i.ibb.co/QPgfptZ/certificado-react-js-coderhose.png" alt="certificado-coder" className="cursor-pointer img-certificado" data-bs-toggle="modal" data-bs-target="#react" style={{ cursor: 'pointer' }} />
                            <div className="modal fade modal-image" id="react" tabIndex="-1" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-body">
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            <img src="https://i.ibb.co/QPgfptZ/certificado-react-js-coderhose.png" alt="" className="d-block w-100 img-certificado" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="div-certificado">
                            <img src="https://i.ibb.co/BzL0Df9/certificado-programacion-backend.png" alt="certificado-coder" className="cursor-pointer img-certificado" data-bs-toggle="modal" data-bs-target="#backend" style={{ cursor: 'pointer' }} />
                            <div className="modal fade modal-image" id="backend" tabIndex="-1" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-body">
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            <img src="https://i.ibb.co/BzL0Df9/certificado-programacion-backend.png" alt="" className="d-block w-100 img-certificado" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div id="section5" className='div-item'>
                    <Contacto></Contacto>
                </div>
            </div>
        </div >
    )
}

export default Main