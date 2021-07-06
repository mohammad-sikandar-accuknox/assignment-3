import { combineReducers } from "redux";
import { ListReducer } from "./ListReducer";

const reducer = combineReducers({
  list: ListReducer,
});

export default reducer;
