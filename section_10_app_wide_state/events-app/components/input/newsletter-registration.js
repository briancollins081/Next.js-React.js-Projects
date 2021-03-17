import { useContext, useRef, useState } from "react";
import NotificationContext from "../../store/NotificationContext";
import classes from "./newsletter-registration.module.css";

const NewsletterRegistration = () => {
  const [error, setError] = useState();
  const [formInfo, setFormInfo] = useState("");
  const [emailRef] = [useRef(null)];
  const notificationCtx = useContext(NotificationContext);
  const registrationHandler = (event) => {
    event.preventDefault();
    // fetch user input (state or refs)
    const email = emailRef.current.value;
    console.log({ email });
    // optional: validate input
    if (
      !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        email
      )
    ) {
      setError("Invalid email, try again!");
      return;
    }
    notificationCtx.showNotification({
      title: "Signing up...",
      message: "Registering for newsletter",
      status: "pending",
    });
    // send valid data to API
    fetch("/api/registration", {
      method: "POST",
      body: JSON.stringify({ email }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return res.json().then((data) => {
          throw new Error(data.message || "Something went wrong!");
        });
      })
      .then((data) => {
        notificationCtx.showNotification({
          title: "Success!",
          message: "Successfully registered for newsletter",
          status: "success",
        });
        setFormInfo(data.message);
      })
      .catch((err) => {
        notificationCtx.showNotification({
          title: "Error!",
          message: err.message || "Something went wrong!",
          status: "error",
        });
      });
  };

  return (
    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={classes.control}>
          <input
            type="email"
            id="email"
            placeholder="Your email"
            aria-label="Your email"
            ref={emailRef}
          />
          <button>Register</button>
        </div>
        {error && <div className={classes.error}>{error}</div>}
        {formInfo && <div className={classes.info}>{formInfo}</div>}
      </form>
    </section>
  );
};

export default NewsletterRegistration;
