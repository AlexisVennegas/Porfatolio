import React from 'react'
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "react-hot-toast";
import '../Style/Inputs.css'

export const MailJs = () => {

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_vcnvjck', 'template_4c65twn', e.target, 'eO7kwrWdGkirDKobd')
        .then(response => toast("Email sent successfully", {position: "top-center"}))
        .catch(error => console.log(error))

    }
    <Toaster />

  return (
    <div className="form-container">
      <form onSubmit={sendEmail} className="form-control-container">
        <div className="form__group field">
          <input
            name="user_name"
            required
            placeholder="Name"
            className="nameContact form__field"
            type="text"
          />
          <label className="form__label" htmlFor="name">
            Name
          </label>
        </div>
        <div className="form__group field">
          <input
            name="user_email"
            required
            placeholder="Name"
            className="nameContact form__field"
            type="email"
          />
          <label className="form__label" htmlFor="name">
            Email
          </label>
        </div>
        <div className="form__group field">
          <textarea
            name="user_message"
            required
            placeholder="Name"
            className="nameContact form__field"
            type="email"
            cols="30"
            rows="10"
          ></textarea>
          <label className="form__label" htmlFor="name">
            Message
          </label>
        </div>

        <button>Send</button>
      </form>
    </div>
  );
}
