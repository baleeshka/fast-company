import React from "react";
import PropTypes from "prop-types";

const GroupList = ({
    items,
    valueProperty,
    contentProperty,
    onItemSelect,
    selectedItem
}) => {
    const renderedItems = Array.isArray(items) ? items : Object.values(items);

    return (
        <div className="list-group">
            {renderedItems.map((item) => (
                <button
                    key={item[valueProperty]}
                    className={
                        "list-group-item list-group-item-action" +
                        (selectedItem &&
                        item[valueProperty] === selectedItem[valueProperty]
                            ? " active"
                            : "")
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
    items: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
    contentProperty: PropTypes.string.isRequired,
    valueProperty: PropTypes.string.isRequired,
    onItemSelect: PropTypes.func.isRequired,
    selectedItem: PropTypes.object
};

export default GroupList;
