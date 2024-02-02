import "./contact.scss";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7r9gi94",
        "template_wi10n37",
        form.current,
        "HueKZ3DV9dQcOG2ui"
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="contact">
      <div className="textContainer">
        <h1>Let's work together</h1>
        <div className="item">
          <h2>Mail</h2>
          <span>sudansupanda063@gmail.com</span>
        </div>
        <div className="item">
          <h2>Address</h2>
          <span>Bhubaneswar, Odisha</span>
        </div>
        <div className="item">
          <h2>Phone</h2>
          <span>+91 832774....</span>
        </div>
      </div>
      <div className="formContainer">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" placeholder="Name" name="name" />
          <input type="email" placeholder="Email" name="email" />
          <textarea rows={8} placeholder="Message" name="message" />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};
