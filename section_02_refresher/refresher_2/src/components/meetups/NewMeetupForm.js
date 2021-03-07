import { useState } from "react";
import Card from "../../ui/Card";
import s from "./NewMeetupForm.module.css";

const NewMeetupForm = () => {
  const [meetupFormState, setMeetupFormState] = useState({
    id: "",
    title: "",
    image: "",
    address: "",
    description: "",
  });
  const submitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <Card>
      <form className={s.form} onSubmit={submitHandler}>
        <div className={s.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" />
        </div>
        <div className={s.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" required id="image" />
        </div>
        <div className={s.control}>
          <label htmlFor="address">Meetup Address</label>
          <input type="text" required id="address" />
        </div>
        <div className={s.control}>
          <label htmlFor="description">Meetup Description</label>
          <textarea id="description" rows="5"></textarea>
        </div>
        <div className={s.actions}>
          <button type="submit">Add Meetup</button>
        </div>
      </form>
    </Card>
  );
};

export default NewMeetupForm;
