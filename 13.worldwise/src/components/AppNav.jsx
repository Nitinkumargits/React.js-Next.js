import { NavLink } from "react-router-dom";
import style from "./AppNav.module.css";
function AppNav() {
  return (
    <nav className={style.nav}>
      <ul>
        <NavLink to="cities">Cities</NavLink>
        <NavLink to="countries">Countries</NavLink>
      </ul>
    </nav>
  );
}

export default AppNav;
