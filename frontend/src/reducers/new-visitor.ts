import { NewVisitor } from "../interfaces/interfaces";

export const reducer = (
  state: NewVisitor = { name: "", roomId: 0, startDate: "", endDate: "" }, action: any) => {
  let newState: NewVisitor;
  switch (action.type) {
    case "FIND_FREE_ROOMS":
      newState = Object.assign(action.visitorInfo);
      return newState;
    default:
      return state;
    case "ADD_NEW_VISITOR":
      newState = Object.assign(action.data);
      return newState;
  }
};
