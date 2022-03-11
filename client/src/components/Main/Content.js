import React from "react";
import Filters from "../Filters/Filters";
import ItemList from "./ItemList";
import Basket from "../Basket/Basket";

/**
 * Component that diplays layout for large devices.
 */
const Content = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-3">
          <Filters />
        </div>
        <div className="col-6">
          <ItemList />
        </div>
        <div className="col-3">
          <Basket />
        </div>
      </div>
    </div>
  );
};
export default Content;
