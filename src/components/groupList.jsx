import React from "react";
import PropTypes from "prop-types";
const GroupList = ({
    items,
    valueProperty,
    contentProperty,
    onItemSelect,
    selectedItem
}) => {
    return (
        <div className="list-group">
            {Object.keys(items).map((item) => (
                <button
                    key={items[item][valueProperty]}
                    className={
                        "list-group-item list-group-item-action" +
                        (items[item] === selectedItem ? " active" : "")
                    }
                    onClick={() => onItemSelect(items[item])}
                >
                    {items[item][contentProperty]}
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
    items: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
    contentProperty: PropTypes.string.isRequired,
    valueProperty: PropTypes.string.isRequired,
    onItemSelect: PropTypes.func.isRequired,
    selectedItem: PropTypes.object
};
export default GroupList;
