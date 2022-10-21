import React from 'react'
import emailjs from "@emailjs/browser";


export const MailJs = () => {

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_vcnvjck', 'template_4c65twn', e.target, 'eO7kwrWdGkirDKobd')
        .then(response => console.log(response))
        .catch(error => console.log(error))

    }


  return (
    <div className='form-container'>
        <form onSubmit={sendEmail} className='form-control-container'>
            <label>Name</label>
            <input type="text" name='user_name'  className='nameContact'/>
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="user_message" id="" cols="30" rows="10"></textarea> 
            <button>Send</button>
        </form>


    </div>
  )
}
