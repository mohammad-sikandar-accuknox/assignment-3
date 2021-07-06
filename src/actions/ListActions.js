import { ActionTypes } from "../constants";

export const addList = (list) => {
  return {
    type: ActionTypes.ADD_LIST,
    payload: list,
  };
};
