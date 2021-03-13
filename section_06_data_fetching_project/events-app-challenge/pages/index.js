import EventList from "../components/events/event-list";
// import { getFeaturedEvents } from "../dummydata";
import fetchEvents from "../data/fetchEvents";
const Home = ({ events: featuredEvents }) => {
  // const featuredEvents = getFeaturedEvents();
  return (
    <div>
      <EventList events={featuredEvents} />
    </div>
  );
};

export default Home;

export const getStaticProps = async (context) => {
  const data = await fetchEvents();
  let temp = [];
  for (const key in data) {
    if (Object.hasOwnProperty.call(data, key)) {
      temp.push({
        id: key,
        title: data[key].title,
        description: data[key].description,
        image: data[key].image,
        isFeatured: data[key].isFeatured,
        location: data[key].location,
        date: data[key].date,
      });
    }
  }

  temp = temp.filter((i) => i.isFeatured === true);

  return {
    props: {
      events: temp,
    },
    revalidate: 30,
  };
};

// export const getServerSideProps = async (context) => {
//   const data = await fetchEvents();
//   if (!data) {
//     return {
//       notFound: true,
//     };
//   }
//   let temp = [];
//   for (const key in data) {
//     if (Object.hasOwnProperty.call(data, key)) {
//       temp.push({
//         id: key,
//         title: data[key].title,
//         description: data[key].description,
//         image: data[key].image,
//         isFeatured: data[key].isFeatured,
//         location: data[key].location,
//         date: data[key].date,
//       });
//     }
//   }

//   temp = temp.filter((i) => i.isFeatured === true);

//   return {
//     props: {
//       events: temp,
//     },
//     // revalidate: 10,
//   };
// };
