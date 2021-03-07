import MeetupItem from "./MeetupItem";
import s from "./MeetupList.module.css";

const MeetupList = ({ meetups }) => {
  return (
    <ul className={s.list}>
      {meetups.map((meetup) => (
        <MeetupItem
          key={meetup.is}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
          description={meetup.description}
        />
      ))}
    </ul>
  );
};

export default MeetupList;
