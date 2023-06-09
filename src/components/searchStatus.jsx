import React from "react";
import PropTypes from "prop-types";

const SearchStatus = ({ count }) => {
    let spanStyle = "";
    const renderPhrase = () => {
        if (count < 1) {
            spanStyle = "badge bg-danger m-2";
            return "Никто с тобой не тусанёт";
        } else if (count < 5 && count !== 1) {
            spanStyle = "badge bg-primary m-2";
            return `${count} человека тусанут с тобой сегодня`;
        } else if (count === 1 || count >= 5) {
            spanStyle = "badge bg-primary m-2";
            return `${count} человек тусанёт с тобой сегодня`;
        }
    };
    renderPhrase();
    return (
        <h2>
            <span className={spanStyle}>{renderPhrase()}</span>
        </h2>
    );
};
SearchStatus.propTypes = {
    count: PropTypes.number.isRequired
};

export default SearchStatus;
