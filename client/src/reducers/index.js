import { combineReducers } from "redux";
import selectedItemsReducer from "./selectedItemsReducer";
import brandsReducer from "./brandsReducer";
import itemsReducer from "./itemsReducer";
import tagsReducer from "./tagsReducer";
import filtersReducer from "./filtersReducer";

export default combineReducers({
  selectedItems: selectedItemsReducer,
  brands: brandsReducer,
  items: itemsReducer,
  tags: tagsReducer,
  filters: filtersReducer,
});
