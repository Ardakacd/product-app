const selectedItemsReducer = (
  selectedItems = { data: [], totalPrice: 0.0 },
  action
) => {
  if (action.type === "REMOVE_FROM_BASKET") {
    selectedItems.data = selectedItems.data.filter((item) => {
      if (item.name === action.payload.name) {
        if (item.count === 1) {
          return false;
        } else {
          item.count = item.count - 1;
          return true;
        }
      } else {
        return true;
      }
    });
    selectedItems.totalPrice = parseFloat(
      (selectedItems.totalPrice - action.payload.price).toFixed(2)
    );
    return { ...selectedItems };
  } else if (action.type === "ADD_TO_BASKET") {
    let currentItem = selectedItems.data.find(
      (item) => item.name === action.payload.name
    );

    selectedItems.totalPrice = parseFloat(
      (selectedItems.totalPrice + action.payload.price).toFixed(2)
    );

    if (currentItem) {
      currentItem.count = currentItem.count + 1;
      return { ...selectedItems };
    } else {
      let newItem = {
        name: action.payload.name,
        price: action.payload.price,
        count: 1,
      };
      selectedItems.data.push(newItem);
      return { ...selectedItems };
    }
  }
  return selectedItems;
};

export default selectedItemsReducer;
