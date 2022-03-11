const handleSelectedItems = (item, operation) => {
  if (operation === "remove") {
    return { type: "REMOVE_FROM_BASKET", payload: item };
  } else {
    return { type: "ADD_TO_BASKET", payload: item };
  }
};

export default handleSelectedItems;
