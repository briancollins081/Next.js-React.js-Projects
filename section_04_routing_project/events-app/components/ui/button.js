import Link from "next/link";
import s from "./button.module.css";

const Button = ({ to = "/", children }) => {
  return (
    <Link href={to}>
      <a className={s.btn}>{children}</a>
    </Link>
  );
};

export default Button;
