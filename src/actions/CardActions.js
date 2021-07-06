import { ActionTypes } from "../constants";

export const addCard = (card) => {
  return {
    type: ActionTypes.ADD_CARD,
    payload: card,
  };
};

export const updatingCard = (card) => {
  return {
    type: ActionTypes.UPDATE_CARD,
    payload: card,
  };
};
