// import store from "../../../store";

export const selectUser = user => {
  return {
    type: "USER_SELECTED",
    payload: user
  };
};
export const searchUser = user => {
  return {
    type: "SEARCH_USER",
    payload: user.target.value
  };
};
