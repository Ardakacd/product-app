import React from "react";
import BrandsFilter from "./BrandsFilter";
import TagsFilter from "./TagsFilter";
import SortingFilter from "./SortingFilter";
const Filters = () => {
  return (
    <React.Fragment>
      <SortingFilter />
      <BrandsFilter />
      <TagsFilter />
    </React.Fragment>
  );
};

export default Filters;
