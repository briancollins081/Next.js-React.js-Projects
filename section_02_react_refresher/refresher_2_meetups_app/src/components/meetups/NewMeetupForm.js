import { useState } from "react";
import Card from "../../ui/Card";
import s from "./NewMeetupForm.module.css";

const NewMeetupForm = ({ handleAddNewMeetup }) => {
  const [meetupFormState, setMeetupFormState] = useState({
    title: "",
    image: "",
    address: "",
    description: "",
  });
  const submitHandler = (e) => {
    e.preventDefault();
    handleAddNewMeetup(meetupFormState);
  };
  return (
    <Card>
      <form className={s.form} onSubmit={submitHandler}>
        <div className={s.control}>
          <label htmlFor="title">Meetup Title</label>
          <input
            type="text"
            required
            id="title"
            onChange={({ target: { value } }) =>
              setMeetupFormState({ ...meetupFormState, title: value })
            }
            value={meetupFormState.title}
          />
        </div>
        <div className={s.control}>
          <label htmlFor="image">Meetup Image</label>
          <input
            type="url"
            required
            id="image"
            onChange={({ target: { value } }) =>
              setMeetupFormState({ ...meetupFormState, image: value })
            }
            value={meetupFormState.image}
          />
        </div>
        <div className={s.control}>
          <label htmlFor="address">Meetup Address</label>
          <input
            type="text"
            required
            id="address"
            onChange={({ target: { value } }) =>
              setMeetupFormState({ ...meetupFormState, address: value })
            }
            value={meetupFormState.address}
          />
        </div>
        <div className={s.control}>
          <label htmlFor="description">Meetup Description</label>
          <textarea
            id="description"
            rows="5"
            onChange={({ target: { value } }) =>
              setMeetupFormState({ ...meetupFormState, description: value })
            }
            value={meetupFormState.description}
          ></textarea>
        </div>
        <div className={s.actions}>
          <button type="submit">Add Meetup</button>
        </div>
      </form>
    </Card>
  );
};

export default NewMeetupForm;
