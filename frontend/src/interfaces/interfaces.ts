export interface FreeRooms {
  id: number;
  type: string;
  class: string;
  visitors?: [];
}

export interface State {
  freeRooms: Array<FreeRooms>;
  newVisitor: NewVisitor;
}

export interface NewVisitor {
  name: string;
  roomId: number;
  startDate: string | Date;
  endDate: string | Date;
}
