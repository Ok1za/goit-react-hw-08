import { useSelector } from "react-redux";
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import clsx from "clsx";
import css from "./Navigation.module.css";

const Navigation = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    return (
        <nav className={css.homeContactsPagesLink}>
            <NavLink
                className={({ isActive }) =>
                    clsx(css.navLink, { [css.active]: isActive })
                }
                to="/">
                Home
            </NavLink>
            {isLoggedIn && (
                <NavLink
                    className={({ isActive }) =>
                        clsx(css.navLink, { [css.active]: isActive })
                    }
                    to="/contacts">
                    Contacts
                </NavLink>
            )}
        </nav>
    );
};

export default Navigation;