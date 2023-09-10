import React from 'react'
import './Proyectos.css'

const Proyect = (props) => {
    const backgroundImageUrl = 'url(' + props.urlImage + ')';
    const cardStyles = {
        backgroundImage: backgroundImageUrl,
        backgroundSize: 'cover'
    }

    return (
        <div className="card" style={cardStyles}>
            <div className="content">
                <p className='etiquetas'>{props.etiquetas}</p>
                <h2 className="title">{props.titulo}</h2>
                <p className="copy">{props.descripcion}</p>
                <div className='d-flex'>
                    <a href={props.urlSite} className='mi-btn' target="_blank" rel="noreferrer" >Ir al sitio</a>
                    <a href={props.urlGithub} className='mi-btn' target="_blank" rel="noreferrer" >Rep Github</a>
                </div>
            </div>
        </div>
    )
}

export default Proyect