import React from "react";
import Filter from "../Filters/Filters";

/**
 * Filter modal for responsive design. Only appears in mobile or tablet.
 */
const FilterModal = () => {
  return (
    <React.Fragment>
      <button
        type="button"
        className="btn btn-info text-white"
        data-bs-toggle="modal"
        data-bs-target="#filterModal"
      >
        Filters
      </button>

      <div
        className="modal fade"
        id="filterModal"
        tabIndex="-1"
        aria-labelledby="filterModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="filterModalLabel">
                Filters
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <Filter />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default FilterModal;
