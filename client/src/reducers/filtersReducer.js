const filtersReducer = (
  filters = {
    sorting: "_sort=price&_order=asc&",
    tags: "",
    brands: "",
    itemType: "itemType=mug&",
  },
  action
) => {
  if (action.type === "ITEMS_FILTERED") {
    return { ...action.payload.filters };
  }
  return filters;
};
export default filtersReducer;
