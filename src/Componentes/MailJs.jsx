import React from 'react'
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "react-hot-toast";

export const MailJs = () => {

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_vcnvjck', 'template_4c65twn', e.target, 'eO7kwrWdGkirDKobd')
        .then(response => toast("Email sent successfully", {position: "top-center"}))
        .catch(error => console.log(error))

    }
    <Toaster />

  return (
    <div className='form-container'>
        <form onSubmit={sendEmail} className='form-control-container'>
            <label>Name</label>
            <input type="text" name='user_name'  className='nameContact' required/>
            <label>Email</label>
            <input type="email" name="user_email" required/>
            <label>Message</label>
            <textarea name="user_message" id="" cols="30" rows="10"></textarea> 
            <button>Send</button>
        </form>


    </div>
  )
}
