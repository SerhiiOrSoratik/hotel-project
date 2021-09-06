import "./rooms-content.css";
import { Room } from "./room/room";
import { useSelector } from "react-redux";
import { State } from "../../../interfaces/interfaces";

export const RoomsContent = () => {
  const state = useSelector((state: State) => state);
  if (state.freeRooms !== undefined && state.newVisitor !== undefined) {
    return (
      <div className="room-content">
        <Room state={state} />
      </div>
    );
  } else return <></>;
};
