import { LOAD_USERS } from "../userLoadingActions";

export const usersLoadingReducer = (state = [], action) => {
  switch (action.type) {
    case LOAD_USERS:
      return [...state, ...action.payload.usersLoaded];
    default:
      return state;
  }
};