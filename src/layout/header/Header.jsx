import { Link } from "react-router-dom";
import style from "./Header.module.scss";

const Header = () => {
  return (
    <header className={style.header}>
      <nav className={style.nav}>
        <Link to={"/"}>בית</Link>
        <Link to={"/player-compare"}>השוואה בין שחקנים</Link>
        <Link to={"/israli-lige-avance-stats"}>ליגה ישראלית</Link>
        <Link to={"/calculate-advance-stats"}>מחשבון סטטיסטיקות מתקדמות</Link>
      </nav>
    </header>
  );
};

export default Header;
