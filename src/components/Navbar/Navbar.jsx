import React, { useState } from 'react'
import './Navbar.css'
const Navbar = () => {
    const [activeNavItem, setActiveNavItem] = useState(null);

    const handleNavItemClick = (index) => {
        setActiveNavItem(index);
    };

    const navItems = [
        'Sobre mi',
        'Proyectos',
        'Lenguajes y herramientas',
        'Certificados',
        'Contacto',
    ];
    return (
        <div className='m-0 p-0' style={{ position: 'sticky', top: 0 }}>
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
                            {navItems.map((item, index) => (
                                <a
                                    id={`high${index + 1}`}
                                    key={index}
                                    className={`nav-link text-light text-decoration-none ${activeNavItem === index ? 'active' : ''}`}
                                    href={`#section${index + 1}`}
                                    onClick={() => handleNavItemClick(index)}
                                >
                                    {item}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar