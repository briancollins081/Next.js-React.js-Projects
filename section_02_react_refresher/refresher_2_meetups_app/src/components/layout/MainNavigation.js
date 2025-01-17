import { useContext } from "react";
import { Link } from "react-router-dom";
import FavoritesContext from "../../store/favorites-context";
import s from "./MainNavigation.module.css";
const MainNavigation = () => {
  const favoritesContext = useContext(FavoritesContext);
  return (
    <header className={s.header}>
      <div className={s.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">Meetups</Link>
          </li>
          <li>
            <Link to="/newmeetup">New Meetup</Link>
          </li>
          <li>
            <Link to="/favoritemeetup">
              My Favorites
              <span className={s.badge}>{favoritesContext.totalFavorites}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
