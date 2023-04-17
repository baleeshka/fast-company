import React from "react";
import QualitiesList from "./qualitie";
import BookMark from "./bookmark";
import PropTypes from "prop-types";

const User = ({ user, onDelete, toggleBookmark }) => {
    return (
        <tr key={user._id}>
            <td>{user.name}</td>
            <td>
                <QualitiesList qualities={user.qualities} />
            </td>
            <td>{user.profession.name}</td>
            <td>{user.completedMeetings}</td>
            <td>{user.rate}/5</td>
            <td>
                <BookMark
                    bookmark={user.bookmark}
                    toggleBookmark={() => toggleBookmark(user._id)}
                />
            </td>
            <td>
                <button
                    onClick={() => onDelete(user._id)}
                    className="btn btn-danger"
                >
                    delete
                </button>
            </td>
        </tr>
    );
};
User.propTypes = {
    user: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        qualities: PropTypes.arrayOf(PropTypes.object).isRequired,
        profession: PropTypes.shape({
            _id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired
        }),
        completedMeetings: PropTypes.number.isRequired,
        rate: PropTypes.number.isRequired,
        bookmark: PropTypes.bool.isRequired
    }).isRequired,
    onDelete: PropTypes.func.isRequired,
    toggleBookmark: PropTypes.func.isRequired
};

export default User;
