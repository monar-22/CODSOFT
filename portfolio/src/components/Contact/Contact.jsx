import React, { useRef } from 'react';
// import emailjs from 'emailjs-com';
import emailjs from '@emailjs/browser';
import './Contact.css';
import { MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import '../../style.css'; 
const Contact = () => {
    // const st={ textAlign: 'center', marginTop: '50px' };
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_q6d6hjf', 'template_xn4jbte', form.current, {
          publicKey: '7suovWrYuTo8K7Kba',
          
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };

  return (
    <section id="contact">
      <h5 className='head'>Get In Touch</h5>
      <h2 className='subhead'>Contact Me</h2>

      <div className='contact_con'>
        <div className='contact_opts'>
          <div className="contact_opt">
             <MdEmail />
             <h4>Email</h4>
             <h5>mona06547@gmail.com</h5>
             <a href="mailto:mona06547@gmail.com" target='_blank'>Send a message</a>
          </div>

          <div className="contact_opt">
          <FaWhatsapp />
             <h4>Whatsapp</h4>
             <h5>8300865926</h5>
             <a href="https://api.whatsapp.com/send?phone+918300865926" target='_blank'>Send </a>
          </div>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Your Full Name' required />
          <input type="email" name="email" placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
