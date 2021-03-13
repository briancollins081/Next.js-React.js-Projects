import { Fragment } from "react";
// import { useRouter } from "next/router";
import EventSummary from "../../components/events/event-detail/event-summary";
import EventLogistics from "../../components/events/event-detail/event-logistics";
import EventContent from "../../components/events/event-detail/event-content";
import ErrorAlert from "../../components/error-alert/error-alert";
import { getEventById } from "../../dummydata";
import Button from "../../components/ui/button";
import fetchEvents from "../../data/fetchEvents";

const SingleEventPage = ({ event }) => {
  // const router = useRouter();
  // const eventId = router.query.eventId;
  // const event = getEventById(eventId);
  if (!event) {
    return (
      <Fragment>
        <div className="center">Loading Event...</div>
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

export const getStaticProps = async (context) => {
  const {
    params: { eventId },
  } = context;
  const dataArr = await fetchEvents();
  const event = dataArr.find((d) => d.id == eventId);
  if (!event) {
    return {
      notFound: true,
    };
  }
  return {
    props: { event },
    revalidate: 30,
  };
};

export const getStaticPaths = async (context) => {
  const dataArr = await fetchEvents();
  const paths = [dataArr[0]].map((d) => ({ params: { eventId: d.id } }));
  return {
    paths,
    // fallback: false,
    fallback: true, //Generate only needed pages - needs a fallback check
    // fallback: 'blocking'
  };
};

export default SingleEventPage;
