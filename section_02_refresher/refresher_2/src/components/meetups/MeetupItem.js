import Card from "../../ui/Card";
import s from "./MeetupItem.module.css";
const MeetupItem = ({ image, title, address, description }) => {
  return (
    <Card>
      <li className={s.item}>
        <div className={s.image}>
          <img src={image} alt={title} />
        </div>
        <div className={s.content}>
          <h3>{title}</h3>
          <address>{address}</address>
          <p>{description}</p>
        </div>
        <div className={s.actions}>
          <button>To Favorites</button>
        </div>
      </li>
    </Card>
  );
};

export default MeetupItem;
