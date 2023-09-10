import React from 'react'
import './Proyectos.css'
import Proyect from './Proyect'

const Proyectos2 = () => {
    return (
        <div className='proyectos'>
            <div className='page-content'>
                <Proyect
                    titulo={"Tienda online"}
                    urlImage={"https://metodeku.com/wp-content/uploads/2020/04/Perbedaan-Marketplace-Dengan-Online-Shop.jpg"}
                    descripcion={"Api RESTful. Servidor Express-js. Patron de diseño MVC. MongoDB como base de datos. Manejo de mensajes automaticos utilizando nodmailer y twilio."}
                    etiquetas={"#Express #MongoDB #Websocket #Nodemailer #HBS"}
                    urlSite={"https://final-backend-abalos.herokuapp.com/"}
                    urlGithub={"https://github.com/Damian-Abalos/proyecto-final-coderHouse"}
                />

                <Proyect
                    titulo={"E-commerce Casa Vegana"}
                    urlImage={"https://www.santecocinaconsciente.com.ar/wp-content/uploads/2022/09/65881147_2600398869978497_2547244601022873600_n.jpg"}
                    descripcion={"E-commerce con carrito de compras y stock real de productos cargados en firebase. Entrega final de curso React-Js - Coderhouse."}
                    etiquetas={"#React-js #Firebase #Bootstrap #responsive"}
                    urlSite={"https://casa-vegana.netlify.app/"}
                    urlGithub={"https://github.com/Damian-Abalos/myapp"}
                />

                <Proyect
                    titulo={"Sova Main"}
                    urlImage={"https://news.codashop.com/ph/wp-content/uploads/sites/5/2023/02/VALORANT-Sova-Agent-Complete-Guide.jpg"}
                    descripcion={"Landing page responsive - Entrega final de curso desarrollo web - Coderhouse"}
                    etiquetas={"#HTML #CSS #Responsive"}
                    urlSite={"https://damian-abalos.github.io/mi-repositorio/"}
                    urlGithub={"https://github.com/Damian-Abalos/mi-repositorio"}
                />
                <Proyect
                    titulo={"Modern Interior"}
                    urlImage={"https://damian-abalos.github.io/interior-consultant/photo1.png"}
                    descripcion={"Sitio web responsive - Desafio del sitio web Devchalleges"}
                    etiquetas={"#HTML #CSS #Responsive"}
                    urlSite={"https://damian-abalos.github.io/interior-consultant/"}
                    urlGithub={"https://github.com/Damian-Abalos/interior-consultant"}
                />
                <br />
            </div>
        </div>
    )
}

export default Proyectos2