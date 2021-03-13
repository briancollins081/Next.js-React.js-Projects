import { Fragment, useEffect, useState } from "react";
import { useRouter } from "next/router";
import useSWR from "swr";
import EventList from "../../components/events/event-list";
import ResultsTitle from "../../components/results-title/results-title";
import ErrorAlert from "../../components/error-alert/error-alert";
// import { getFilteredEvents } from "../../dummydata";
import Button from "../../components/ui/button";
import fetchFilteredEvents from "../../data/fetchFilteredEvents";

const FilteredEvents = (/* {
  hasError,
  events,
  date: { year: filterByYear, month: filterByMonth },
} */) => {
  const [events, setEvents] = useState([]);
  const { data, error } = useSWR(
    "https://nextjs-course-4fce9-default-rtdb.firebaseio.com/events.json"
  );
  useEffect(() => {
    if (data) {
      const temp = [];
      for (const key in data) {
        if (Object.hasOwnProperty.call(data, key)) {
          const e = data[key];
          temp.push({ id: key, ...e });
        }
      }
      setEvents(temp);
    }
  }, [data]);

  const router = useRouter();
  const filterData = router.query.slug;
  if (!filterData) {
    return <p className="center">Loading...</p>;
  }
  const filterByYear = Number(filterData[0]);
  const filterByMonth = Number(filterData[1]);
  if (
    isNaN(filterByYear) ||
    isNaN(filterByMonth) ||
    filterByYear > 2030 ||
    filterByYear < 2020 ||
    error
  ) {
    return (
      <Fragment>
        <ErrorAlert>
          <p className="center">Invalid filters. Please adjust your values!</p>
        </ErrorAlert>
        <div className="center">
          <Button to="/events">Show All Events</Button>
        </div>
      </Fragment>
    );
  }

  const filteredEvents = events.filter((e) => {
    const date = new Date(e.date);
    return (
      date.getFullYear() == filterByYear && date.getMonth() == filterByMonth - 1
    );
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <Fragment>
        <ErrorAlert>
          <p className="center">No events found for the choosen filter!</p>
        </ErrorAlert>
        <div className="center">
          <Button to="/events">Show All Events</Button>
        </div>
      </Fragment>
    );
  }
  const date = new Date(filterByYear, filterByMonth - 1);
  return (
    <Fragment>
      <ResultsTitle date={date} />
      <EventList events={filteredEvents} />
    </Fragment>
  );
};

export default FilteredEvents;
/* 
export const getServerSideProps = async ({ params: { slug: filterData } }) => {
  // console.log({filterData});
  const filterByYear = Number(filterData[0]);
  const filterByMonth = Number(filterData[1]);
  if (
    isNaN(filterByYear) ||
    isNaN(filterByMonth) ||
    filterByYear > 2030 ||
    filterByYear < 2020
  ) {
    return {
      hasError: true, //or
      // notFound: true, //or
      // redirect:{
      //   destination: '/customerrpage'
      // }
    };
  }
  const events = await fetchFilteredEvents({
    year: filterByYear,
    month: filterByMonth,
  });
  return {
    props: { events, date: { year: filterByYear, month: filterByMonth } },
  };
};
 */