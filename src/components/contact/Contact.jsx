import { useRef } from "react";
import "./Contact.css";
import { MdOutlineMail } from "react-icons/md";

export default function Contact() {
  const formRef = useRef();
  const btnRef = useRef();
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    const name = nameRef.current.value.trim();
    const email = emailRef.current.value.trim();
    const message = messageRef.current.value.trim();

    if (name === "" || email === "" || message === "") {
      alert("Please fill data first!!");
      return;
    }

    const btn = btnRef.current;
    btn.value = "Sending...";

    const serviceID = "default_service";
    const templateID = "template_fgy9ed2";

    emailjs.sendForm(serviceID, templateID, formRef.current).then(
      () => {
        btn.value = "Send Email";
        alert("Your message was sent successfully");
        nameRef.current.value = "";
        emailRef.current.value = "";
        messageRef.current.value = "";
      },
      (err) => {
        btn.value = "Send Email";
        alert(JSON.stringify(err));
      },
    );
  };

  return (
    <div>
      <section className="contact" id="contact">
        <h2 className="head">
          <MdOutlineMail />
          Contact us
        </h2>
        <form id="form" ref={formRef} onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="name">name</label>
            <input type="text" name="name" id="name" ref={nameRef} />
          </div>
          <div className="field">
            <label htmlFor="email">email</label>
            <input type="text" name="email" id="email" ref={emailRef} />
          </div>
          <div className="field">
            <label htmlFor="message">message</label>
            <input type="text" name="message" id="message" ref={messageRef} />
          </div>

          <input type="submit" id="button" value="Send Email" ref={btnRef} />
        </form>
      </section>
    </div>
  );
}
