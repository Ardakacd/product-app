import FilterModal from "./FilterModal";
import BasketModal from "./BasketModal";
import ItemList from "../Main/ItemList";

/**
 * Component that diplays layout for small devices.
 */
const MobileContent = () => {
  return (
    <div className="d-flex flex-column ">
      <div className="d-flex flex-row justify-content-evenly mt-2">
        <FilterModal />
        <BasketModal />
      </div>
      <div>
        <ItemList />
      </div>
    </div>
  );
};

export default MobileContent;
