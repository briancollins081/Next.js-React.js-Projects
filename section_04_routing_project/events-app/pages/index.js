import EventList from "../components/events/event-list";
import { getFeaturedEvents } from "../dummydata";
const Home = () => {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <EventList events={featuredEvents} />
    </div>
  );
};

export default Home;
