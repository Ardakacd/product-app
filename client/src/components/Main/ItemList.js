import "./ItemList.css";
import { connect } from "react-redux";
import handleSelected from "../../actions/handleSelectedItems";
import ItemTypeFilter from "../Filters/ItemTypeFilter";
import Pagination from "../Pagination/Pagination";
import { useState } from "react";
const ItemList = ({ handleSelected, items }) => {
  const [selectedItems, setSelectedItems] = useState([]);

  const getSelectedItems = (items) => {
    setSelectedItems(items);
    console.log(items);
  };
  const renderItem = (item, index) => {
    return (
      <div
        key={index}
        className="d-flex flex-column col-xl-3 col-lg-4 col-md-6 col-sm-12 mb-3 "
      >
        <div className="d-flex align-items-center justify-content-center image-border p-3 text-align-center">
          <div className="item-image"></div>
        </div>
        <p className="mb-0 item-price mt-1">&#8378; {item.price}</p>
        <p className="mb-0"> {item.name}</p>
        <button
          className="add-button mt-auto blue-hovered"
          onClick={() =>
            handleSelected({ name: item.name, price: item.price }, "add")
          }
        >
          Add
        </button>
      </div>
    );
  };
  return (
    <div className="d-flex flex-column">
      <h5 className="h5">Products</h5>
      <ItemTypeFilter />
      {items.length === 0 ? (
        <div className="alert alert info">No Products Found!</div>
      ) : (
        <div className="bg-white p-4">
          <div className="row">
            {selectedItems.map((item, index) => renderItem(item, index))}
          </div>
        </div>
      )}

      <Pagination items={items} setSelectedItems={getSelectedItems} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return { items: state.items };
};
export default connect(mapStateToProps, { handleSelected })(ItemList);
