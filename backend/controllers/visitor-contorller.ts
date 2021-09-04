import { VisitorModel } from "../models/visitor-model";

export class VisitorController {
  static addVisitor(
    name: string,
    roomId: number,
    reservationStartDate: Date,
    reservationEndDate: Date
  ) {
    return VisitorModel.addVisitor(
      name,
      roomId,
      reservationStartDate,
      reservationEndDate
    );
  }

  static getVisitors() {
    return VisitorModel.getVisitors();
  }

  static getFreeRoom(params : any) {
    return VisitorModel.getFreeRoom(params);
  }

  static deleteVisitor = (id: number) => {
    return VisitorModel.deleteVisitor(id);
  };
}
