import s from "./contact-form.module.css";

const ContactForm = () => {
  return (
    <section className={s.contact}>
      <h1>How can I help you?</h1>
      <form className={s.form}>
        <div className={s.controls}>
          <div className={s.control}>
            <label htmlFor="email">Your Email Address</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className={s.control}>
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" name="name" required />
          </div>
        </div>
        <div className={s.controls}>
          <div className={s.control}>
            <label htmlFor="message">Your Name</label>
            <textarea id="message" rows="5" required></textarea>
          </div>
        </div>
        <div className={s.controls}>
          <div className={s.actions}>
            <button type="submit">Send Message</button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
