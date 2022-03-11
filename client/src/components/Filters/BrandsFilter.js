import CustomizedFilter from "./CustomizedFilter";
import { connect } from "react-redux";
import handleFilters from "../../actions/handleFilters";
import PropTypes from "prop-types";

/**
 * Component that displays all the brands and handle filtering.
 *
 */
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

BrandsFilter.propTypes = {
  /** List of the brands. */
  brands: PropTypes.array,

  /** Action creator that changes filters in the app. */
  handleFilter: PropTypes.func,
};

const mapStateToProps = (state) => {
  return { brands: state.brands };
};

export default connect(mapStateToProps, { handleFilters })(BrandsFilter);
