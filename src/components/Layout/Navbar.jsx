import classes from "./Navbar.module.css";

import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <div className={classes.titleBackground}>
        <img
          src="src\assets\Cloud4.png"
          alt="cloud"
          className={classes.cloudimg}
        />
        <h1 className={classes.title}>dream journal</h1>
        <img
          src="src\assets\Cloud1.png"
          alt="cloud"
          className={classes.cloudimg}
        />
      </div>
      <nav>
        <ul className={classes.navbar}>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? classes.activeNavlink : classes.navlink
              }
              to="Observe"
            >
              Observe
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? classes.activeNavlink : classes.navlink
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? classes.activeNavlink : classes.navlink
              }
              to="Ponder"
            >
              Ponder
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Navbar;
