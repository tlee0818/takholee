import React from "react";
import "./contacts.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsLinkedin, BsInstagram } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contacts = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ittwpgs",
        "template_ck1euao",
        form.current,
        "FWjMsBNFnbYJUJhPi"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
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

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="9"
            required
            placeholder="Your Message"
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contacts;
