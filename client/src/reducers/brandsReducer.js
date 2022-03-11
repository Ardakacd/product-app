const brandsReducer = (brands = [], action) => {
  if (action.type === "GET_INITIAL_DATA") {
    return [...action.payload.brands];
  }
  return brands;
};
export default brandsReducer;
