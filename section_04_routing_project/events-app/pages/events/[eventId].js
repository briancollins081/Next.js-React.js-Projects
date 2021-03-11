import { Fragment } from "react";
import { useRouter } from "next/router";
import EventSummary from "../../components/events/event-detail/event-summary";
import EventLogistics from "../../components/events/event-detail/event-logistics";
import EventContent from "../../components/events/event-detail/event-content";
import ErrorAlert from "../../components/error-alert/error-alert";
import { getEventById } from "../../dummydata";
import Button from "../../components/ui/button";

const SingleEventPage = () => {
  const router = useRouter();
  const eventId = router.query.eventId;
  const event = getEventById(eventId);
  if (!event) {
    return (
      <Fragment>
        <ErrorAlert>
          <p className="center">Event not found!</p>
        </ErrorAlert>
        <div className="center">
          <Button to="/events">Show All Events</Button>
        </div>
      </Fragment>
    );
  }
  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
};

export default SingleEventPage;
