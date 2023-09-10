import React from 'react'

const Perfil = () => {
  return (
    <>
      <h4 className="section-header">Sobre mi</h4>
      <p className='text-justify'>
        ¡Hola! Soy Damián Abalos, un apasionado desarrollador web especializado en React.js y Node.js.
        Con experiencia en el desarrollo fullstack, listo para enfrentar nuevos desafíos y ayudar a construir soluciones web eficientes.
      </p>
      <em>Lo que no se, lo aprendo.</em>
      <hr />
      <div class="d-flex justify-content-center">
        <div class="mx-2">
          <a target="_blank" href="https://github.com/Damian-Abalos/">
            <img className='bg-light' src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="logo Github" style={{width: "50px", borderRadius:'5px'}} />
          </a>
        </div>
        <div class="mx-2">
          <a target="_blank" href="https://www.linkedin.com/in/damian-abalos/">
            <img className='bg-light' src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="logo LinkedIn" style={{width: "50px", borderRadius:'5px'}} />
          </a>
        </div>
      </div>
    </>
  )
}

export default Perfil