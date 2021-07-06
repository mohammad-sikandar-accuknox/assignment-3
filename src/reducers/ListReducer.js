import { ActionTypes } from "../constants";
const { randomBytes } = require("crypto");

const initialState = [
  {
    title: "Task 1",
    id: "rherh",
    cards: [
      { text: "Create a new component", id: "e65dh" },
      { text: "Add a function", id: "754hyf" },
    ],
  },
  {
    title: "Task 2",
    id: "yuthugb",
    cards: [
      { text: "Create a new component t2", id: "ngvg47" },
      { text: "Add a function t2", id: "dfsk5fy6" },
      { text: "Export the details t2", id: "vfkj6fg" },
    ],
  },
];

export const ListReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.ADD_LIST:
      console.log(type, payload);
      const newList = {
        title: payload.title,
        cards: [],
        id: randomBytes(4).toString("hex"),
      };
      return [...state, newList];
    case ActionTypes.ADD_CARD:
      const newCard = {
        text: payload.text,
        id: randomBytes(4).toString("hex"),
      };
      const newState = state.map((list) => {
        console.log(list);
        console.log(payload.listId);
        if (list.id === payload.listId) {
          return {
            ...list,
            cards: [...list.cards, newCard],
          };
        } else {
          return list;
        }
      });
      return newState;
    case ActionTypes.UPDATE_CARD:
      let tempState = [...state];
      var moveCard;
      tempState.map((list) => {
        if (list.id === payload.lid) {
          var result = list.cards.filter((obj) => {
            return obj.id !== payload.cid;
          });
          moveCard = list.cards.filter((obj) => {
            return obj.id === payload.cid;
          });
          list.cards = [...result];
          console.log(moveCard[0]);
        }
        console.log(tempState);
        return null;
      });
      tempState.map((list) => {
        if (list.id === payload.tlist) {
          let newc = [...list.cards, moveCard[0]];
          list.cards = [...newc];
        }
        return null;
      });
      const newstate = [...tempState];
      console.log(newstate);
      return newstate;
    default:
      return state;
  }
};
