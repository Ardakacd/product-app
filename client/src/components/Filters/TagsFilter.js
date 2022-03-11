import CustomizedFilter from "./CustomizedFilter";
import { connect } from "react-redux";
import handleFilters from "../../actions/handleFilters";
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

const mapStateToProps = (state) => {
  return { tags: state.tags };
};
export default connect(mapStateToProps, { handleFilters })(TagsFilter);
