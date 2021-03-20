import { MongoClient, ObjectID } from "mongodb";

import MeetupDetail from "../../components/meetups/MeetupDetail";

const SingleMeetup = ({ meetup }) => {
  return (
    <MeetupDetail
      image={meetup.image}
      title={meetup.title}
      address={meetup.address}
      description={meetup.description}
    />
  );
};
const dbConnectGetMeetupCollection = async () => {
  const client = await MongoClient.connect(
    `mongodb+srv://andere:TXpNi42JMj6aCIXZ@cluster0.l4l3f.mongodb.net/meetups?retryWrites=true&w=majority`
  );
  const db = client.db();
  return db.collection("meetups");
};

export const getStaticProps = async (context) => {
  const { meetupId } = context.params;
  const meetupsCollection = await dbConnectGetMeetupCollection();
  const existingMeetup = await meetupsCollection.findOne({
    _id: new ObjectID(meetupId),
  });
  existingMeetup._id = existingMeetup._id.toString();

  return {
    props: { meetup: existingMeetup },
  };
};
export const getStaticPaths = async () => {
  const meetupsCollection = await dbConnectGetMeetupCollection();
  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

  return {
    paths: meetups.map((m) => ({ params: { meetupId: m._id.toString() } })),
    // paths: [{ params: { meetupId: "m1" } }, { params: { meetupId: "m2" } }],
    // fallback: true
    fallback: false,
  };
};
export default SingleMeetup;
