import { Link } from "react-router-dom";
import s from "./MainNavigation.module.css";
const MainNavigation = () => {
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
            <Link to="/favoritemeetup">My Favorites</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
