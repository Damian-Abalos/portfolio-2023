// import React, { useState } from 'react';
// import './Contacto.css';

// const Contacto = () => {
//   const [nameValue, setNameValue] = useState('');
//   const [emailValue, setEmailValue] = useState('');
//   const [messageValue, setMessageValue] = useState('');
//   const [statusMessage, setStatusMessage] = useState('');

//   const handleNameChange = (e) => {
//     setNameValue(e.target.value);
//   };

//   const handleEmailChange = (e) => {
//     setEmailValue(e.target.value);
//   };

//   const handleMessageChange = (e) => {
//     setMessageValue(e.target.value);
//   };

//   return (
//     <div className='text-center h-100'>
//       <section id='contact'>
//         <h4 className='section-header'>Contactame</h4>
//         <div className='contact-wrapper'>
// <form 
//             role='form' onSubmit={(e) => e.preventDefault()} 
//           name="Contact" method="POST" data-netlify="true" className='form-horizontal' id='contact-form'
//           >
//             <div className='form-group'>
//               <div className='col-sm-12'>
//                 <input
//                   type='text'
//                   className='form-control'
//                   id='name'
//                   placeholder='NAME'
//                   name='name'
//                   value={nameValue}
//                   onChange={handleNameChange}
//                   required
//                 />
//               </div>
//             </div>
//             <div className='form-group'>
//               <div className='col-sm-12'>
//                 <input
//                   type='email'
//                   className='form-control'
//                   id='email'
//                   placeholder='EMAIL'
//                   name='email'
//                   value={emailValue}
//                   onChange={handleEmailChange}
//                   required
//                 />
//               </div>
//             </div>
//             <textarea
//               className='form-control'
//               rows='10'
//               placeholder='MESSAGE'
//               name='message'
//               value={messageValue}
//               onChange={handleMessageChange}
//               required
//             ></textarea>
//             <button className='btn btn-primary send-button' id='submit' type='submit'
//             onClick={enviarFormulario}
//             >
//               <div className='alt-send-button'>
//                 <i className='fa fa-paper-plane'></i>
//                 <span className='send-text'>SEND</span>
//               </div>
//             </button>
//             <input type="hidden" name="form-name" value="Contact" />
//           </form>

//           <div className='direct-contact-container'>
//             <ul className='contact-list'>
//               <li className='list-item'>
//                 <i className='fa fa-map-marker fa-2x'>
//                   <span className='contact-text place'>Buenos Aires</span>
//                 </i>
//               </li>
//               <li className='list-item'>
//                 <i className='fa fa-phone fa-2x'>
//                   <span className='contact-text phone'>
//                     <a href='tel:1-212-555-5555' title='Give me a call'>(011) 3371-0828</a>
//                   </span>
//                 </i>
//               </li>
//               <li className='list-item'>
//                 <i className='fa fa-envelope fa-2x'>
//                   <span className='contact-text gmail'>
//                     <a href='mailto:#' title='Send me an email'>damianabalos94@gmail.com</a>
//                   </span>
//                 </i>
//               </li>
//             </ul>
//           </div>
//           <div id='mensaje'>{statusMessage}</div>
//         </div>
//       </section>
//     </div>
//   );

// };

// export default Contacto;

import React from 'react'
import './Contacto.css'

const Contacto = () => {

  return (
    <div className='text-center h-100'>
      <section id="contact">

        <h4 className="section-header">Contactame</h4>

        <div className="contact-wrapper">


          <form name="contact" netlify>
            <p>
              <label>Name <input type="text" name="name" /></label>
            </p>
            <p>
              <label>Email <input type="email" name="email" /></label>
            </p>
            <p>
              <button type="submit">Send</button>
            </p>
          </form>
        {/* <form id="contact-form" className="form-horizontal" name='contact' netlify>

            <div className="form-group">
              <div className="col-sm-12">
                <input type="text" className="form-control" id="name" placeholder="NAME" name="name" required />
              </div>
            </div>

            <div className="form-group">
              <div className="col-sm-12">
                <input type="email" className="form-control" id="email" placeholder="EMAIL" name="email" required />
              </div>
            </div>

            <textarea className="form-control" rows="10" placeholder="MESSAGE" name="message" id='message' required></textarea>
            <input type="hidden" name="form-name" value="Contact" />
            <button className="btn btn-primary send-button" id="submit" type="submit" value="SEND">
              <div className="alt-send-button">
                <i className="fa fa-paper-plane"></i><span className="send-text">SEND</span>
              </div>

            </button>

          </form> */}


        <div className="direct-contact-container">

          <ul className="contact-list">
            <li className="list-item"><i className="fa fa-map-marker fa-2x"><span className="contact-text place">Buenos Aires</span></i></li>

            <li className="list-item"><i className="fa fa-phone fa-2x"><span className="contact-text phone"><a href="tel:11-3371-0828" title="Give me a call">(011) 3371-0828</a></span></i></li>

            <li className="list-item"><i className="fa fa-envelope fa-2x"><span className="contact-text gmail"><a href="mailto:#" title="Send me an email">damianabalos94@gmail.com</a></span></i></li>

          </ul>


        </div>
    </div>
      </section >
    </div >
  )
}

export default Contacto