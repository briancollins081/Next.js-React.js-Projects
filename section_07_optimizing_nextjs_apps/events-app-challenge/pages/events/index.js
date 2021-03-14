import { useRouter } from "next/router";
import Head from "next/head";
import EventList from "../../components/events/event-list";
import EventsSearch from "../../components/events/events-search";
import fetchEvents from "../../data/fetchEvents";

const Events = ({ events }) => {
  const router = useRouter();
  // const events = getAllEvents();
  const handleFindEvents = (year, month) => {
    const path = `/events/${year}/${month}`;
    router.push(path);
  };
  return (
    <>
      <Head>
        <title>All Events List</title>
        <meta name="description" content="Find a lot of events here that help our society evolve"/>
      </Head>
      <EventsSearch onSearch={handleFindEvents} />
      <EventList events={events} />
    </>
  );
};

export default Events;

export const getStaticProps = async (context) => {
  const temp = await fetchEvents();

  return {
    props: {
      events: temp,
    },
    revalidate: 30,
  };
};

// export const getServerSideProps = async (context) => {
//   const temp = await fetchEvents();
//   return {
//     props: {
//       events: temp,
//     },
//   };
// };
