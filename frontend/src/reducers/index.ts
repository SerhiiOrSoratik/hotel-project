import { combineReducers } from "redux";
import { reducer as freeRooms } from "./free-rooms";
import { reducer as newVisitor } from "./new-visitor";

const allReducers = combineReducers({
  freeRooms,
  newVisitor,
});

export default allReducers;
