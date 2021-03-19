import Link from "next/link";
import Logo from "./logo";
import s from "./main-navigation.module.css";
const MainNavigation = () => {
  return (
    <header className={s.header}>
      <Link href="/">
        <a cl>
          <Logo />
        </a>
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/posts">Posts</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
