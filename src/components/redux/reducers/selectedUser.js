export default (state = "hi", action) => {
  switch (action.type) {
    case "USER_SELECTED":
      return action.payload;
    default:
      return state;
  }
};
