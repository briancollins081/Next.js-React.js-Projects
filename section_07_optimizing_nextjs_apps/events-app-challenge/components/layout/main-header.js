import Link from "next/link";
import s from "./main-header.module.css";
const MainHeader = () => {
  return (
    <header className={s.header}>
      <div className={s.logo}>
        <Link href="/">ABC Events</Link>
      </div>
      <nav className={s.navigation}>
        <ul>
          <li>
            <Link href="/events">Browse Events</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
