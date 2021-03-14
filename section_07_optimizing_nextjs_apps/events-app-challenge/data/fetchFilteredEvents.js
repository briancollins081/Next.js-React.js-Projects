import fetchEvents from "./fetchEvents";

const fetchFilteredEvents = async ({ year, month }) => {
  const eventsArr = await fetchEvents();
  const filteredEvents = eventsArr.filter((e) => {
    const date = new Date(e.date);
    return date.getFullYear() == year && date.getMonth() == month - 1;
  });
  return filteredEvents;
};

export default fetchFilteredEvents;
