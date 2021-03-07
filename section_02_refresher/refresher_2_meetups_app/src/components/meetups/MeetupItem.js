import { useContext } from "react";
import Card from "../../ui/Card";
import FavoriteContext from "../../store/favorites-context";
import s from "./MeetupItem.module.css";
const MeetupItem = ({ id, image, title, address, description }) => {
  const favoritesContext = useContext(FavoriteContext);

  const itemIsFavorite = favoritesContext.itemIsFavorite(id);

  const toggleFavoritesStatusHandler = () => {
    if (itemIsFavorite) {
      favoritesContext.removeFavorite(id);
    } else {
      favoritesContext.addFavorite({ id, image, title, address, description });
    }
  };
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
          <button onClick={toggleFavoritesStatusHandler}>
            {itemIsFavorite ? "Remove from Favorites" : "To Favorites"}
          </button>
        </div>
      </li>
    </Card>
  );
};

export default MeetupItem;
