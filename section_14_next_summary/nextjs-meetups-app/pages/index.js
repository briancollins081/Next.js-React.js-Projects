import MeetupList from "../components/meetups/MeetupList";

const MEETUPS = [
  {
    id: "m1",
    title: "First meetup",
    image:
      "https://images.unsplash.com/photo-1545906785-38f53f99e380?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    address: "Adress 123, City, Town, Stree0988",
    description: "This is a first meetup of time...",
  },
  {
    id: "m1",
    title: "Second meetup",
    image:
      "https://images.unsplash.com/photo-1470569767443-ec53af605b81?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    address: "Adress 455, City, Town, 56-009",
    description: "This is a second meetup of time...",
  },
];
const Home = ({ meetups }) => {
  return <MeetupList meetups={meetups} />;
};

export const getStaticProps = async (context) => {
  // Get Data
  return {
    props: {
      meetups: MEETUPS,
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
