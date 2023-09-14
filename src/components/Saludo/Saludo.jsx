import React from "react";
import "./Saludo.css";
const Saludo = () => {

    return (
        <div id="saludo">
            <div className="contenedor m-auto container">
                <div
                    // data-aos="fade-up"
                    // data-aos-offset="200"
                    // data-aos-delay="20"
                    // data-aos-duration="1000"
                    // data-aos-easing="ease-in-out"
                    // data-aos-mirror="true"
                    // data-aos-once="false"
                    // data-aos-anchor-placement="top-center"
                >
                    <div className="mi-img align-items-center m-auto">
                        <img
                            src="https://i.ibb.co/Sw110yN/dami-bari-400x400.jpg"
                            alt="Damian Abalos"
                        />
                    </div>
                    <div className="align-items-center">
                        <h1 className="ps-3">¡Hola! Soy Damian Abalos</h1>
                        <h2>FullStack Developer</h2>
                    </div>
                </div>
            </div>
            <div className="scroll-icon text-center text-light">
                <p>scroll</p>
                <span><a href="#contenido">👇</a></span>
            </div>
        </div>
    );
};

export default Saludo;
