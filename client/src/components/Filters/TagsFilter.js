import CustomizedFilter from "./CustomizedFilter";
import { connect } from "react-redux";
import handleFilters from "../../actions/handleFilters";
import PropTypes from "prop-types";

/**
 * Component that displays all the tags and handle filtering.
 *
 */
const TagsFilter = ({ tags, handleFilters }) => {
  const clickedTag = (filter, isAdded) => {
    handleFilters("Tags", filter, isAdded);
  };
  return (
    <div>
      <CustomizedFilter
        data={tags}
        header="Tags"
        placeholderValue="Search Tag"
        clickedTag={clickedTag}
      />
    </div>
  );
};

TagsFilter.propTypes = {
  /** List of the tags. */
  tags: PropTypes.array,
  /** Action creator that changes filters in the app.  */
  handleFilter: PropTypes.func,
};

const mapStateToProps = (state) => {
  return { tags: state.tags };
};
export default connect(mapStateToProps, { handleFilters })(TagsFilter);
