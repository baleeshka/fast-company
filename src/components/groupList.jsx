import React from "react";
import PropTypes from "prop-types";

const GroupList = ({
    items,
    valueProperty,
    contentProperty,
    onItemSelect,
    selectedItem
}) => {
    let listItems = [];
    if (Array.isArray(items)) {
        listItems = items;
    } else if (typeof items === "object") {
        listItems = Object.values(items);
    }

    return (
        <div className="list-group">
            {listItems.map((item) => (
                <button
                    key={item[valueProperty]}
                    className={
                        "list-group-item list-group-item-action" +
                        (item === selectedItem ? " active" : "")
                    }
                    onClick={() => onItemSelect(item)}
                >
                    {item[contentProperty]}
                </button>
            ))}
        </div>
    );
};

GroupList.defaultProps = {
    valueProperty: "_id",
    contentProperty: "name"
};

GroupList.propTypes = {
    items: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.object),
        PropTypes.objectOf(PropTypes.object)
    ]).isRequired,
    contentProperty: PropTypes.string.isRequired,
    valueProperty: PropTypes.string.isRequired,
    onItemSelect: PropTypes.func.isRequired,
    selectedItem: PropTypes.object
};

export default GroupList;
