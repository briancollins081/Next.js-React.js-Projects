import { useEffect, useState } from "react";
import Notification from "../ui/notification";
import s from "./contact-form.module.css";

const sendContactData = async (fdata) => {
  const response = await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify({ ...fdata }),
    headers: { "Content-Type": "application/json" },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong!");
  }
};

const ContactForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    message: "",
  });
  const [reqStatus, setReqStatus] = useState(); //null|undefined|pending|success|error
  const [reqErr, setReqErr] = useState();

  useEffect(() => {
    if (reqStatus === "success" || reqStatus === "error") {
      const timer = setTimeout(() => {
        setReqStatus(null);
        setReqErr("");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [reqStatus]);

  const handleSendMessage = async (event) => {
    try {
      event.preventDefault();
      setReqStatus("pending");
      await sendContactData({ ...formData });
      setReqStatus("success");
      setFormData({ email: "", name: "", message: "" });
    } catch (error) {
      setReqStatus("error");
      setReqErr(error.message);
    }
  };
  let notification;
  if (reqStatus === "pending") {
    notification = {
      status: "pending",
      title: "Sending your message...",
      message: "Do not worry, your mesage is on the way...",
    };
  } else if (reqStatus === "error") {
    notification = {
      status: "error",
      title: "An error occured...",
      message: reqErr || "There was an error sending your message..",
    };
  } else if (reqStatus === "success") {
    notification = {
      status: "success",
      title: "Sent success",
      message: "Message sent successfully!!!",
    };
  }
  return (
    <section className={s.contact}>
      <h1>How can I help you?</h1>
      <form className={s.form} onSubmit={handleSendMessage}>
        <div className={s.controls}>
          <div className={s.control}>
            <label htmlFor="email">Your Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={({ target: { value: email } }) =>
                setFormData({ ...formData, email })
              }
            />
          </div>
          <div className={s.control}>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={({ target: { value: name } }) =>
                setFormData({ ...formData, name })
              }
            />
          </div>
        </div>
        <div className={s.controls}>
          <div className={s.control}>
            <label htmlFor="message">Your Name</label>
            <textarea
              id="message"
              rows="5"
              required
              value={formData.message}
              onChange={({ target: { value: message } }) =>
                setFormData({ ...formData, message })
              }
            ></textarea>
          </div>
        </div>
        <div className={s.controls}>
          <div className={s.actions}>
            <button type="submit">Send Message</button>
          </div>
        </div>
      </form>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
    </section>
  );
};

export default ContactForm;
