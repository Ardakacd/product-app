import React, { useState } from "react";
import { connect } from "react-redux";
import handleFilters from "../../actions/handleFilters";
import "./ItemTypeFilter.css";
import PropTypes from "prop-types";

/**
 * Component that displays all the item types. Either mug or shirt.
 *
 */
const ItemTypeFilter = ({ handleFilters }) => {
  const [selectedType, setSelectedType] = useState("mug");
  const itemTypeLabel = ["mug", "shirt"];
  return (
    <div className="d-flex flex-row align-items-center mb-3">
      {itemTypeLabel.map((item, index) => {
        return (
          <div
            key={index}
            className={`d-flex justify-content-center align-items-center py-1 px-2 me-2 ${
              selectedType === item ? "selected-type" : "unselected-type"
            }`}
            onClick={() => {
              if (item !== selectedType) {
                handleFilters("itemType", item);
              }
              setSelectedType(item);
            }}
          >
            <p className="mb-0">{item}</p>
          </div>
        );
      })}
    </div>
  );
};

ItemTypeFilter.propTypes = {
  /** Action creator that changes filters in the app.  */
  handleFilter: PropTypes.func,
};

export default connect(null, { handleFilters })(ItemTypeFilter);
