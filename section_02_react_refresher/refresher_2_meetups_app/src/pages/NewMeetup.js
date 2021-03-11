import { useHistory } from "react-router-dom";
import NewMeetupForm from "../components/meetups/NewMeetupForm";
import { FIREBASE_DB_URL } from "../constants";

const NewMeetup = () => {
  const history = useHistory();

  const handleAddNewMeetup = (meetupData) => {
    fetch(FIREBASE_DB_URL + "meetups.json", {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      history.replace("/");
    });
  };
  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm handleAddNewMeetup={handleAddNewMeetup} />
    </section>
  );
};

export default NewMeetup;
