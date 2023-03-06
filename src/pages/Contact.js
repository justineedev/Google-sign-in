import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";

import { ToastContainer, toast, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/Contact.css";

const Contact = () => {
  const [isSending, setIsSending] = useState(false);
  const fromNameRef = useRef();
  const fromEmailRef = useRef();
  const messageRef = useRef();

  const navigate = useNavigate();

  const handleClickBack = () => {
    navigate("/");
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const message = messageRef.current.value;

    // If the message is empty, show a toast and return without submitting the form
    if (!message.trim()) {
      toast.error("Email & Message is required", {
        autoClose: 3000,
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    }

    setIsSending(true);

    toast.info("Processing...", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: false,
      toastId: "processing",
    });

    emailjs
      .send(
        "service_q0odokl",
        "template_70yqyp8",
        {
          from_name: fromNameRef.current.value,
          from_email: fromEmailRef.current.value,
          message: messageRef.current.value,
        },
        "cMvofBlLY2cIP_Smj"
      )
      .then((result) => {
        toast.update("processing", {
          render: "Success! Your message has been sent.",
          autoClose: 3000,
          type: toast.TYPE.SUCCESS,
        });
        e.target.reset();
      })
      .catch((err) => {
        toast.update("processing", {
          render: "An error occurred. Please try again.",
          autoClose: 3000,
          type: toast.TYPE.ERROR,
        });
      })
      .finally(() => setIsSending(false));
  };
  return (
    <>
      <ToastContainer
        transition={Flip}
        limit={5}
        style={{ marginBlock: "10px" }}
      />
      <div className="contact-wrapper">
        <h1 className="contact-title">How can we assist you?</h1>
        <form onSubmit={sendEmail}>
          <div className="contact-input-container">
            <input
              disabled={isSending}
              type="text"
              placeholder=" "
              className="contact-input"
              ref={fromNameRef}
            />
            <label htmlFor="" className="contact-input-label">
              <span>Name</span>
            </label>
          </div>
          <div className="contact-input-container">
            <input
              disabled={isSending}
              type="email"
              placeholder=" "
              className="contact-input"
              ref={fromEmailRef}
              required
            />
            <label htmlFor="" className="contact-input-label">
              <span>Email</span>
            </label>
          </div>
          <div className="contact-input-container">
            <textarea
              disabled={isSending}
              placeholder=" "
              className="contact-input textarea"
              style={{ height: "175px" }}
              ref={messageRef}
              required
            ></textarea>
            <label htmlFor="" className="contact-input-label textarea">
              <span>What's on your mind?</span>
            </label>
          </div>

          <div className="contact-buttons">
            <button type="button" onClick={handleClickBack}>
              Back
            </button>
            <button disabled={isSending} type="submit">
              {isSending ? "Sending..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact;
