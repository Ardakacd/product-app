import React from "react";
import { connect } from "react-redux";
import handleSelected from "../../actions/handleSelectedItems";
import "./Basket.css";
import PropTypes from "prop-types";

/**
 * Component that displays selected items.
 */
const Basket = ({ selectedItems, handleSelected }) => {
  const renderItem = (item, index) => {
    return (
      <div
        key={index}
        className="d-flex flex-row justify-content-between align-items-center border-bottom mb-4 pb-4"
      >
        <div>
          <p className="mb-0">{item.name}</p>
          <p className="basket-product-price mb-0">&#8378; {item.price}</p>
        </div>
        <div className="d-flex flex-row align-items-center">
          <i
            className="fa-solid fa-minus me-2 operator-icon"
            onClick={() =>
              handleSelected({ name: item.name, price: item.price }, "remove")
            }
          ></i>
          <div className="d-flex justify-content-center align-items-center counter me-2 px-2 py-1">
            <p className="mb-0">{item.count}</p>
          </div>
          <i
            className="fa-solid fa-plus me-2 operator-icon"
            onClick={() =>
              handleSelected({ name: item.name, price: item.price }, "add")
            }
          ></i>
        </div>
      </div>
    );
  };
  return (
    <div className="basket bg-white p-4">
      {selectedItems.data.length === 0 ? (
        <React.Fragment>
          <div className="alert alert-info">
            There are no products in the basket!
          </div>
        </React.Fragment>
      ) : (
        <div className="d-flex flex-column">
          {selectedItems.data.map((item, index) => renderItem(item, index))}
          <div className="d-inline-block align-self-end total-price py-3 px-2">
            <p className="mb-0">&#8378; {selectedItems.totalPrice}</p>
          </div>
        </div>
      )}
    </div>
  );
};

Basket.propTypes = {
  /** List of the items in the basket. */
  items: PropTypes.array,
  /** Action creator that changes the items in the basket.  */
  handleSelected: PropTypes.func,
};

const mapStateToProps = (state) => {
  return { selectedItems: state.selectedItems };
};
export default connect(mapStateToProps, { handleSelected })(Basket);
