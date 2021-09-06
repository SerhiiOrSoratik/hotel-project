import { FreeRooms } from "../interfaces/interfaces";

export const reducer = (state: FreeRooms[] = [], action: any) => {
  let newState: FreeRooms[] = [];
  switch (action.type) {
    case "FIND_FREE_ROOMS":
      newState = Object.assign(action.data);
      return newState;
    case "FILTER_ROOMS":
      newState = state.filter((state) => {
        return state.id !== action.roomId;
      });
      return newState;

    default:
      return state;
  }
};
