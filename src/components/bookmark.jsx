import React from "react";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import PropTypes from "prop-types";

const BookMark = ({ toggleBookmark, bookmark }) => {
    return (
        <div onClick={() => toggleBookmark()}>
            {bookmark ? <BsBookmarkFill /> : <BsBookmark />}
        </div>
    );
};

BookMark.propTypes = {
    toggleBookmark: PropTypes.func.isRequired,
    bookmark: PropTypes.bool.isRequired
};
export default BookMark;
