import MeetupDetail from "../../components/meetups/MeetupDetail";

const SingleMeetup = () => {
  return (
    <MeetupDetail
      image={
        "https://images.unsplash.com/photo-1545906785-38f53f99e380?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
      }
      title={"First meetup"}
      address={"Some address, city, street"}
      description={"Meetup description goes here"}
    />
  );
};

export default SingleMeetup;
