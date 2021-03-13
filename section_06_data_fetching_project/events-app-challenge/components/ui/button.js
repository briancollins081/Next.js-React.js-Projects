import Link from "next/link";
import s from "./button.module.css";

const Button = ({ to, onClick, type, children }) => {
  if (to) {
    return (
      <Link href={to}>
        <a className={s.btn}>{children}</a>
      </Link>
    );
  }
  return (
    <button type={type ? type : "button"} className={s.btn} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
