import Button from "../ui/button";
import DateIcon from "../icons/date-icon";

import s from "./event-item.module.css";
import AddressIcon from "../icons/address-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";

const EventItem = ({ title, image, date, location, id }) => {
  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const formattedAddress = location.replace(", ", "\n");

  const exploreLink = `/events/${id}`;

  return (
    <li className={s.item}>
      <img src={"/" + image} alt={title} />
      <div className={s.content}>
        <div className={s.summary}>
          <h2>{title}</h2>
          <div className={s.date}>
            <DateIcon />
            <time>{humanReadableDate}</time>
          </div>
          <div className={s.address}>
            <AddressIcon />
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className={s.actions}>
          <Button to={exploreLink}>
            <span>Explore Event</span>
            <span className={s.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
