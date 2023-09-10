import React from 'react'
import './Navbar.css'
const Navbar = () => {

    return (
        <div className='m-0 p-0' style={{position: 'sticky', top: 0}}>
            <nav className="w-100 p-0 navbar navbar-expand-lg navbar-light bg-light">
                <div className="nav-container container-fluid bg-dark">
                    <a style={{width:'100px'}} className="navbar-brand" href="#saludo">
                        <img
                            className='img-nav'
                            src="https://i.ibb.co/Sw110yN/dami-bari-400x400.jpg"
                            alt="Damian Abalos"
                        />
                    </a>
                    <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end bg-dark" id="navbarNavAltMarkup">
                        <div className="navbar-nav p-3">
                            <a id="high1" className="nav-link text-light" aria-current="page" href="#section1">Sobre mi</a>
                            <a id="high3" className="nav-link text-light" href="#section2">Proyectos</a>
                            <a id="high2" className="nav-link text-light" href="#section3">Lenguajes y herramientas</a>
                            <a id="high4" className="nav-link text-light" href="#section4">Certificados</a>
                            <a id="high5" className="nav-link text-light" href="#section5">Contacto</a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar