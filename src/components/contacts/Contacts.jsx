import React, { useState } from "react";
import "./contacts.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsLinkedin, BsInstagram } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contacts = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const clearFields = () => {
    setName("");
    setEmail("");
    setMessage("");
  };

  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangeMessage = (e) => {
    setMessage(e.target.value);
  };

  const notify = (e) =>
    toast.promise(sendEmail(e), {
      pending: "Message is sending",
      success: "Message sent!",
      error: "There was a problem",
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });

  const sendEmail = (e) => {
    e.preventDefault();

    return emailjs
      .sendForm(
        "service_ittwpgs",
        "template_ck1euao",
        form.current,
        "FWjMsBNFnbYJUJhPi"
      )
      .then(
        (result) => {
          clearFields()
          return result;
        },
        (error) => {
          return error;
        }
      );
  };

  return (
    <section id="contacts">
      <h5>always looking for exciting opportunities</h5>
      <h2>Contact Me</h2>

      <div className="container contact-container">
        <div className="contact-options">
          <a href="mailto:takhol@andrew.cmu.edu" target="_blank">
            <article className="contact-option">
              <MdOutlineEmail className="contact-option-icon" />

              <h4>Email Me</h4>
              <h5>takhol@andrew.cmu.edu</h5>
            </article>
          </a>

          <a href="https://www.linkedin.com/in/takholee/" target="_blank">
            <article className="contact-option">
              <BsLinkedin className="contact-option-icon" />

              <h4>Connect With Me</h4>
              <h5>takholee</h5>
            </article>
          </a>
          <a href="https://www.instagram.com/tlee0818/" target="_blank">
            <article className="contact-option">
              <BsInstagram className="contact-option-icon" />

              <h4>Follow Me</h4>
              <h5>tlee0818</h5>
            </article>
          </a>
        </div>

        <form ref={form} onSubmit={notify}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={name}
            onChange={handleChangeName}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={email}
            onChange={handleChangeEmail}
            required
          />
          <textarea
            name="message"
            rows="9"
            required
            placeholder="Your Message"
            value={message}
            onChange={handleChangeMessage}
          ></textarea>
          <button type="submit" className="btn btn-primary">
            <ToastContainer />
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contacts;
