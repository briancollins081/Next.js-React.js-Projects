import { useRouter } from "next/router";
import { Fragment } from "react";
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
    <Fragment>
      <EventsSearch onSearch={handleFindEvents} />
      <EventList events={events} />
    </Fragment>
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
