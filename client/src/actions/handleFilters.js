import axios from "axios";
import {
  arrangeSortFilter,
  arrangeItemTypeFilter,
  arrangeBrandsFilter,
  arrangeTagsFilter,
} from "../common/filterHelper";

const handleFilters = (type, filter, isAdded = null) => {
  return function (dispatch, getState) {
    let allFilters = { ...getState().filters };
    console.log(allFilters);
    switch (type) {
      case "Sorting":
        arrangeSortFilter(allFilters, filter);
        break;
      case "Brands":
        arrangeBrandsFilter(allFilters, filter, isAdded);
        break;
      case "Tags":
        arrangeTagsFilter(allFilters, filter, isAdded);
        break;
      case "itemType":
        arrangeItemTypeFilter(allFilters, filter);
        break;
      default:
        console.log("Error");
    }

    let wholeQuery = `?${allFilters.itemType}${allFilters.brands}${allFilters.tags}${allFilters.sorting}`;
    console.log(wholeQuery);
    axios
      .get(`http://localhost:3001/items${wholeQuery}`)
      .then((res) => {
        dispatch({
          type: "ITEMS_FILTERED",
          payload: { items: res.data, filters: allFilters },
        });
      })
      .catch((err) => console.log(err.response));
  };
};

export default handleFilters;
