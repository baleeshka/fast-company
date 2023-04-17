import React from "react";
import PropTypes from "prop-types";

const QualitiesList = ({ qualities }) => {
    return (
        <>
            {qualities.map((qualitie) => (
                <span
                    key={qualitie._id}
                    className={`badge bg-${qualitie.color} mx-1`}
                >
                    {qualitie.name}
                </span>
            ))}
        </>
    );
};
QualitiesList.propTypes = {
    qualities: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default QualitiesList;
