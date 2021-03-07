import s from "./Card.module.css";
const Card = ({ children }) => {
  return <div className={s.card}>{children}</div>;
};

export default Card;
