import styles from "./Sidebar.module.css";
import Logo from "./Logo";
import AppNav from "./AppNav";
import { Outlet } from "react-router-dom";
function SideBar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      <Outlet />
      <footer className={styles.footer}>
        <p className={styles.footer}>
          &copy; Copyright {new Date().getFullYear()} by WorldWise INC.
        </p>
      </footer>
    </div>
  );
}

export default SideBar;
