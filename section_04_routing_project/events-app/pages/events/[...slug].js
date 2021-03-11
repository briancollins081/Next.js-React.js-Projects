import { Fragment } from "react";
import { useRouter } from "next/router";
import EventList from "../../components/events/event-list";
import ResultsTitle from "../../components/results-title/results-title";
import ErrorAlert from "../../components/error-alert/error-alert";
import { getFilteredEvents } from "../../dummydata";
import Button from "../../components/ui/button";

const FilteredEvents = () => {
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
    filterByYear < 2020
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

  const filteredEvents = getFilteredEvents({
    year: filterByYear,
    month: filterByMonth,
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
