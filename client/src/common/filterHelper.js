const arrangeSortFilter = (allFilters, filter) => {
  switch (filter) {
    case "Price low to high":
      allFilters.sorting = "_sort=price&_order=asc&";
      break;
    case "Price high to low":
      allFilters.sorting = "_sort=price&_order=desc&";
      break;
    case "New to old":
      allFilters.sorting = "_sort=added&_order=desc&";
      break;
    case "Old to new ":
      allFilters.sorting = "_sort=added&_order=asc&";
      break;
    default:
      console.log("Error");
  }
};

const arrangeItemTypeFilter = (allFilters, filter) => {
  allFilters.itemType = `itemType=${filter}&`;
};

const arrangeBrandsFilter = (allFilters, filter, isAdded) => {
  const label = `manufacturer=${filter}&`;
  if (filter === "All") {
    allFilters.brands = "";
    return;
  }
  if (isAdded === true) {
    allFilters.brands += label;
  } else {
    allFilters.brands = allFilters.brands.replace(label, "");
  }
};

const arrangeTagsFilter = (allFilters, filter, isAdded) => {
  const label = `tags_like=${filter}&`;
  if (filter === "All") {
    allFilters.tags = "";
    return;
  }
  if (isAdded === true) {
    allFilters.tags += label;
  } else {
    allFilters.tags = allFilters.tags.replace(label, "");
  }
};

export {
  arrangeSortFilter,
  arrangeItemTypeFilter,
  arrangeBrandsFilter,
  arrangeTagsFilter,
};
