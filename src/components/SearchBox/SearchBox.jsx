import { useDispatch } from "react-redux";
import css from "./SearchBox.module.css";
import { useState } from "react";

const SearchBox = () => {
    const dispatch = useDispatch();
    const [filterValue, setFilterValue] = useState('');

    const handleFilterChange = (event) => {
        setFilterValue(event.target.value);
    };

    const handleFilterSubmit = () => {
        dispatch(filterValue);
    };

    return (
        <div className={css.searchBoxLabel}>
            <span className={css.searchBoxLabelText}>Find contacts by name</span>
            <div className={css.searchButtonContainer}>
                <input
                    className={css.searchBoxInput}
                    type="text"
                    value={filterValue}
                    onChange={handleFilterChange}
                    placeholder="Search contacts"
                />
                <button className={css.searchButton} onClick={handleFilterSubmit}>Search</button>
            </div>
        </div>
    );
};

export default SearchBox;
