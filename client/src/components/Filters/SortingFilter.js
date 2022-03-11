import CustomizedFilter from "./CustomizedFilter";
import { connect } from "react-redux";
import handleFilters from "../../actions/handleFilters";
import PropTypes from "prop-types";

/**
 * Component that displays all the data that is needed for sorting.
 *
 */
const SortingFilter = ({ handleFilters }) => {
  const data = [
    { id: 1, name: "Price low to high", initiallyChecked: true },
    { id: 2, name: "Price high to low" },
    { id: 3, name: "New to old" },
    { id: 4, name: "Old to new " },
  ];
  const clickedTag = (filter, isAdded) => {
    handleFilters("Sorting", filter);
  };
  return (
    <div>
      <CustomizedFilter
        data={data}
        header="Sorting"
        inputType="radio"
        clickedTag={clickedTag}
      />
    </div>
  );
};

SortingFilter.propTypes = {
  /** Action creator that changes filters in the app.  */
  handleFilter: PropTypes.func,
};
export default connect(null, { handleFilters })(SortingFilter);
