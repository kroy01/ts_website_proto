import './EmailInputForm.css';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const EmailInputForm = () => {
  const emailinp = useRef();

  const sendMail = (e) => {
    e.preventDefault(); // prevents the page from reloading when you hit “Send”

    emailjs.sendForm('sammardgmail', 'teamcontactemail', emailinp.current, 'ez9SsOaCnaaBwuSDd').then(
      result => {
        console.log(result.text);
        alert("Email sent");
      },
      error => {
        console.log(error.text);
        alert("Error");
      }
    );
  };

  return (
    <div>

      <form className="EmailForm" ref={emailinp} onSubmit={sendMail}>

        <div className='FormHeading'>
          <h2 style={{ fontFamily: 'xspace', fontSize: '4vmax', color: 'aliceblue', textAlign: 'center ' }}>EMAIL US</h2>
        </div>
        <div className='flexboxcontainer'>
          <div className='FormCompany'>
            <label style={{ fontSize: '1.4vmax' }}>Company</label>
            <input type="text" className='formtext' placeholder='Company' name="from_company" style={{ height: '100%' }} required />
          </div>
          <div className='FormName'>
            <label style={{ fontSize: "1.4vmax" }}>Name</label>
            <input type="text" className='formtext' placeholder='Name' name="from_name" style={{ height: '100%' }} required />
          </div>
          <div className='FormEmail'>
            <label style={{ fontSize: "1.4vmax" }}>Email Address</label>
            <input type="email" className='formtext' placeholder='Email' name="from_email" style={{ height: '100%' }} required />
          </div>
          <div className='FormPhone'>
            <label style={{ fontSize: "1.4vmax" }}>Phone Number</label>
            <input type="text" className='formtext' placeholder='Phone number' name="from_phone" style={{ height: '100%' }} required />
          </div>
          <div className='FormMessage'>
            <label style={{ fontSize: "1.4vmax" }}>Message</label>
            <textarea className='formtext' placeholder='Message' name="message" style={{ height: '17vh' }} required />
          </div>
        </div>
        <div className='FormSubmit'>
          <input type="submit" className='btn btn-success SubButton' value="Send" style={{ alignItems: 'end', marginInline: 'auto' }} />
        </div>
      </form>
    </div>
  );
};

export default EmailInputForm;