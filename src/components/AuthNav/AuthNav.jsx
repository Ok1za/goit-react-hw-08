import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./AuthNav.module.css";

const AuthNav = () => {
    return (
        <div className={css.regLogNav}>
            <NavLink
                className={({ isActive }) =>
                    clsx(css.navLink, { [css.active]: isActive })
                }
                to="/register">
                Register
            </NavLink>
            <NavLink
                className={({ isActive }) =>
                    clsx(css.navLink, { [css.active]: isActive })
                }
                to="/login">
                Log in
            </NavLink>
        </div>
    );
};

export default AuthNav;