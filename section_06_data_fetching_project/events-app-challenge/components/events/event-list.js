import EventItem from "./event-item";
import s from "./event-list.module.css";
const EventList = ({ events }) => {
  return (
    <ul className={s.list}>
      {events.map((ev) => (
        <EventItem
          key={ev.id}
          title={ev.title}
          image={ev.image}
          date={ev.date}
          location={ev.location}
          id={ev.id}
        />
      ))}
    </ul>
  );
};

export default EventList;
