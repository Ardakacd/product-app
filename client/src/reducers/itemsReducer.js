const itemsReducer = (items = null, action) => {
  if (action.type === "GET_INITIAL_DATA") {
    return [...action.payload.items];
  } else if (action.type === "ITEMS_FILTERED") {
    return [...action.payload.items];
  }
  return items;
};
export default itemsReducer;
