import React from "react";
import Basket from "../Basket/Basket";

/**
 * Basket modal for responsive design. Only appears in mobile or tablet.
 */
const BasketModal = () => {
  return (
    <React.Fragment>
      <button
        type="button"
        className="btn btn-info text-white"
        data-bs-toggle="modal"
        data-bs-target="#basketModal"
      >
        Basket
      </button>

      <div
        className="modal fade"
        id="basketModal"
        tabIndex="-1"
        aria-labelledby="basketModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Basket
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <Basket />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default BasketModal;
