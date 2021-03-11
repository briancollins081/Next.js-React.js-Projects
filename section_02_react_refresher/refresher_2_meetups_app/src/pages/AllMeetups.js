import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";
import { FIREBASE_DB_URL } from "../constants";

const DATA = [
  {
    id: "m1",
    title: "This is a first meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
  {
    id: "m2",
    title: "This is a second meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
];

const AllMeetups = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    handleFetchMeetups();
  }, []);

  const handleFetchMeetups = () => {
    fetch(FIREBASE_DB_URL + "meetups.json", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log({ data });
        setIsLoading(false);
        const temp = handleProcessData(data);
        setMeetups([...temp]);
      });
  };
  const handleProcessData = (objectData) => {
    const meetupsTemp = [];
    for (const key in objectData) {
      meetupsTemp.push({
        id: key,
        ...objectData[key],
      });
    }
    return meetupsTemp;
  };
  return (
    <>
      {isLoading === true ? (
        <section>
          <p>Fetching data...</p>
        </section>
      ) : (
        <div>
          <h1>All Meetups</h1>
          <MeetupList meetups={meetups} />
        </div>
      )}
    </>
  );
};

export default AllMeetups;
