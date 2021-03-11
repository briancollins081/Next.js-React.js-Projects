import { useRouter } from "next/router";
import { Fragment } from "react";
import EventList from "../../components/events/event-list";
import EventsSearch from "../../components/events/events-search";
import { getAllEvents } from "../../dummydata";

const Events = () => {
  const router = useRouter();
  const events = getAllEvents();
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
