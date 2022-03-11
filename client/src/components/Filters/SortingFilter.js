import CustomizedFilter from "./CustomizedFilter";
import { connect } from "react-redux";
import handleFilters from "../../actions/handleFilters";
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

export default connect(null, { handleFilters })(SortingFilter);
