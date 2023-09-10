import React from 'react'
import './Contacto.css'
import { useState } from 'react';

const Contacto = () => {

  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const handleNameChange = (e) => {
    setNameValue(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmailValue(e.target.value);
  };


  return (
    <div className='text-center h-100'>
      <section id="contact">

        <h4 className="section-header">Contactame</h4>

        <div className="contact-wrapper">

          <form id="contact-form" className="form-horizontal" role="form">

            <div className="form-group">
              <div className="col-sm-12">
                <input type="text" className="form-control" id="name" placeholder="NAME" name="name" value={nameValue} onChange={handleNameChange} required />
              </div>
            </div>

            <div className="form-group">
              <div className="col-sm-12">
                <input type="email" className="form-control" id="email" placeholder="EMAIL" name="email" value={emailValue} onChange={handleEmailChange} required />
              </div>
            </div>

            <textarea className="form-control" rows="10" placeholder="MESSAGE" name="message" required></textarea>

            <button className="btn btn-primary send-button" id="submit" type="submit" value="SEND">
              <div className="alt-send-button">
                <i className="fa fa-paper-plane"></i><span className="send-text">SEND</span>
              </div>

            </button>

          </form>


          <div className="direct-contact-container">

            <ul className="contact-list">
              <li className="list-item"><i className="fa fa-map-marker fa-2x"><span className="contact-text place">Buenos Aires</span></i></li>

              <li className="list-item"><i className="fa fa-phone fa-2x"><span className="contact-text phone"><a href="tel:1-212-555-5555" title="Give me a call">(011) 3371-0828</a></span></i></li>

              <li className="list-item"><i className="fa fa-envelope fa-2x"><span className="contact-text gmail"><a href="mailto:#" title="Send me an email">damianabalos94@gmail.com</a></span></i></li>

            </ul>
          

          </div>
        </div>
      </section>
    </div>
  )
}

export default Contacto