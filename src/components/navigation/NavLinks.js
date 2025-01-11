import { NavLink } from "react-router-dom";
import classes from "../navigation/main-navigation/MainNavigation.module.css";

function NavLinks(props) {
    return ( 
        <>
            <li className={classes.navbar_item}>
                <NavLink to="/" onClick={props.onClick} className={({ isActive }) => isActive ? classes.active : classes.navbar_link} end>
                    Home
                </NavLink>
            </li>
            <li className={classes.navbar_item}>
                <NavLink to="/watch-list" onClick={props.onClick} className={({ isActive }) => isActive ? classes.active : classes.navbar_link} end>
                    Watch List
                </NavLink>
            </li>
        </>
    );
}

export default NavLinks;