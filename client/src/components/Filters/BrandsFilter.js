import CustomizedFilter from "./CustomizedFilter";
import { connect } from "react-redux";
import handleFilters from "../../actions/handleFilters";

const BrandsFilter = ({ brands, handleFilters }) => {
  const clickedTag = (filter, isAdded) => {
    handleFilters("Brands", filter, isAdded);
  };
  return (
    <div>
      <CustomizedFilter
        data={brands}
        header="Brands"
        placeholderValue="Search Brand"
        clickedTag={clickedTag}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return { brands: state.brands };
};

export default connect(mapStateToProps, { handleFilters })(BrandsFilter);
