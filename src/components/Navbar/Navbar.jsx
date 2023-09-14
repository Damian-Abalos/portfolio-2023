import React from 'react'
import './Navbar.css'
const Navbar = (active) => {

    const activeClass = active

    return (
        <div className='m-0 p-0 mi-navbar'>
            <nav className="w-100 p-0 navbar navbar-expand-lg navbar-light bg-light">
                <div className="nav-container container-fluid bg-dark">
                    <a style={{ width: '100px' }} className="navbar-brand d-flex align-items-center" href="#saludo">
                        <img
                            className='img-nav'
                            src="https://i.ibb.co/Sw110yN/dami-bari-400x400.jpg"
                            alt="Damian Abalos"
                        />
                        <h3 className='ms-4 mb-0 text-light'>Damian Abalos</h3>

                    </a>
                    <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end bg-dark" id="navbarNavAltMarkup">
                        <div className="navbar-nav p-3">
                            <a
                                id='high1'
                                className={`${activeClass.active === 'active-div1' ? 'active' : ''} nav-link text-light text-decoration-none`}
                                href={`#section1`}
                            >
                                Sobre mi
                            </a>
                            <a
                                id='high2'
                                className={`${activeClass.active === 'active-div2' ? 'active' : ''} nav-link text-light text-decoration-none`}
                                href={`#section2`}
                            >
                                Proyectos
                            </a>
                            <a
                                id='high3'
                                className={`${activeClass.active === 'active-div3' ? 'active' : ''} nav-link text-light text-decoration-none`}
                                href={`#section3`}
                            >
                                Lenguajes y herramientas
                            </a>
                            <a
                                id='high4'
                                className={`${activeClass.active === 'active-div4' ? 'active' : ''} nav-link text-light text-decoration-none`}
                                href={`#section4`}
                            >
                                Certificados
                            </a>
                            <a
                                id='high5'
                                className={`${activeClass.active === 'active-div5' ? 'active' : ''} nav-link text-light text-decoration-none`}
                                href={`#section5`}
                            >
                                Contacto
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar