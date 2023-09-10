import React from 'react'
import Scrollspy from 'react-scrollspy'
import './Main.css'
import Proyectos from '../Proyectos/Proyectos'
import Navbar from '../Navbar/Navbar'
import Contacto from '../Contacto/Contacto'
import Perfil from '../Perfil/Perfil'

const Main = () => {


    return (
        <div className='contenido row' id='contenido'>
            <Navbar />

            <div className="scroll">

                <div id="section1" className='div-item'>
                    <Perfil />
                </div>

                <div id="section2" className='div-item'>
                    <h4 className="section-header">Proyectos</h4>
                    <Proyectos />
                </div>

                <div id="section3" className='div-item'>
                    <h4 className="section-header">Lenguajes y herramientas</h4>
                    <div className='row m-auto justify-content-evenly'>
                        {/* <div class="grid grid-row-2 py-4 gap-4"><div class="grid grid-cols-7 gap-1 aos-init aos-animate" data-aos="fade-top" data-aos-duration="1600" data-aos-delay="400"><div class="rounded-full bg-light w-11 h-11 md:w-14 md:h-14 flex items-center place-content-center" data-v-e8019bd0=""><img src="icons/vue.png" alt="" class="flex w-max p-1 md:p-0 max-h-8 md:max-h-10 pt-1" data-v-e8019bd0=""/></div><div class="rounded-full bg-light w-11 h-11 md:w-14 md:h-14 flex items-center place-content-center" data-v-e8019bd0=""><img src="icons/js.png" alt="" class="flex w-max p-1 md:p-0 max-h-8 md:max-h-10 pt-1" data-v-e8019bd0=""/></div><div class="rounded-full bg-light w-11 h-11 md:w-14 md:h-14 flex items-center place-content-center" data-v-e8019bd0=""><img src="icons/laravel.png" alt="" class="flex w-max p-1 md:p-0 max-h-8 md:max-h-10 pt-1" data-v-e8019bd0=""/></div><div class="rounded-full bg-light w-11 h-11 md:w-14 md:h-14 flex items-center place-content-center" data-v-e8019bd0=""><img src="icons/node.png" alt="" class="flex w-max p-1 md:p-0 max-h-8 md:max-h-10 pt-1" data-v-e8019bd0=""/></div><div class="rounded-full bg-light w-11 h-11 md:w-14 md:h-14 flex items-center place-content-center" data-v-e8019bd0=""><img src="icons/python.png" alt="" class="flex w-max p-1 md:p-0 max-h-8 md:max-h-10 pt-1" data-v-e8019bd0=""/></div><div class="rounded-full bg-light w-11 h-11 md:w-14 md:h-14 flex items-center place-content-center" data-v-e8019bd0=""><img src="icons/mongoDb.png" alt="" class="flex w-max p-1 md:p-0 max-h-8 md:max-h-10 pt-1" data-v-e8019bd0=""/></div><div class="rounded-full bg-light w-11 h-11 md:w-14 md:h-14 flex items-center place-content-center" data-v-e8019bd0=""><img src="icons/xd.png" alt="" class="flex w-max p-1 md:p-0 max-h-8 md:max-h-10 pt-1" data-v-e8019bd0=""/></div></div><div class="grid grid-cols-7 gap-1 aos-init aos-animate" data-aos="fade-top" data-aos-duration="1600" data-aos-delay="700"><div class="rounded-full bg-light w-11 h-11 md:w-14 md:h-14 flex items-center place-content-center" data-v-e8019bd0=""><img src="icons/tailwind.png" alt="" class="flex w-max p-1 md:p-0 max-h-8 md:max-h-10 pt-1" data-v-e8019bd0=""/></div><div class="rounded-full bg-light w-11 h-11 md:w-14 md:h-14 flex items-center place-content-center" data-v-e8019bd0=""><img src="icons/css.png" alt="" class="flex w-max p-1 md:p-0 max-h-8 md:max-h-10 pt-1" data-v-e8019bd0=""/></div><div class="rounded-full bg-light w-11 h-11 md:w-14 md:h-14 flex items-center place-content-center" data-v-e8019bd0=""><img src="icons/postman.png" alt="" class="flex w-max p-1 md:p-0 max-h-8 md:max-h-10 pt-1" data-v-e8019bd0=""/></div><div class="rounded-full bg-light w-11 h-11 md:w-14 md:h-14 flex items-center place-content-center" data-v-e8019bd0=""><img src="icons/html.png" alt="" class="flex w-max p-1 md:p-0 max-h-8 md:max-h-10 pt-1" data-v-e8019bd0=""/></div><div class="rounded-full bg-light w-11 h-11 md:w-14 md:h-14 flex items-center place-content-center" data-v-e8019bd0=""><img src="icons/php.png" alt="" class="flex w-max p-1 md:p-0 max-h-8 md:max-h-10 pt-1" data-v-e8019bd0=""/></div><div class="rounded-full bg-light w-11 h-11 md:w-14 md:h-14 flex items-center place-content-center" data-v-e8019bd0=""><img src="icons/figma.png" alt="" class="flex w-max p-1 md:p-0 max-h-8 md:max-h-10 pt-1" data-v-e8019bd0=""/></div><div class="rounded-full bg-light w-11 h-11 md:w-14 md:h-14 flex items-center place-content-center" data-v-e8019bd0=""><img src="icons/vsc.png" alt="" class="flex w-max p-1 md:p-0 max-h-8 md:max-h-10 pt-1" data-v-e8019bd0=""/></div></div></div> */}
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
                                <div className="modal-dialog" style={{ maxWidth: '50%' }}>
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
                                <div className="modal-dialog" style={{ maxWidth: '50%' }}>
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
                                <div className="modal-dialog" style={{ maxWidth: '50%' }}>
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