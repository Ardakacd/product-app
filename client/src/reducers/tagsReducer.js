const tagsReducer = (tags = [], action) => {
  if (action.type === "GET_INITIAL_DATA") {
    return [...action.payload.tags];
  }
  return tags;
};

export default tagsReducer;
