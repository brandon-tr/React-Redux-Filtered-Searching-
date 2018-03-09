export default (state = null, action) => {
  switch (action.type) {
    case "SEARCH_USER":
      return action.payload;
    default:
      return null;
  }
};
