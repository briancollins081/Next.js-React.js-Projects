import Head from "next/head";
import { MongoClient } from "mongodb"; //server side only
import MeetupList from "../components/meetups/MeetupList";

const Home = ({ meetups }) => {
  return (
    <>
      <Head>
        <title>Nextjs Meetups</title>
        <meta name="description" content="Browse a repo for all next.js meetings"/>
      </Head>
      <MeetupList meetups={meetups} />
    </>
  );
};

export const getStaticProps = async (context) => {
  // Get Data
  const client = await MongoClient.connect(
    `mongodb+srv://andere:TXpNi42JMj6aCIXZ@cluster0.l4l3f.mongodb.net/meetups?retryWrites=true&w=majority`
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find().toArray();
  return {
    props: {
      meetups: meetups.map((m) => ({
        title: m.title,
        address: m.address,
        image: m.image,
        id: m._id.toString(),
      })),
    },
    // revalidate: 3600
  };
};

/* export const getServerSideProps = async (context) => {
  const { req, res } = context;
  return {
    props: { meetups: MEETUPS },
  };
}; */

export default Home;
