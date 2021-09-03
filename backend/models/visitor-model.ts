import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export class VisitorModel {
  static async addVisitor(
    name: string,
    roomId: number,
    reservationStartDate: Date,
    reservationEndDate: Date
  ) {
    return await prisma.visitors.create({
      data: {
        name: name,
        roomId: roomId,
        reservation_start_date: reservationStartDate,
        reservation_end_date: reservationEndDate,
      },
    });
  }

  static getVisitors() {
    return prisma.visitors.findMany();
  }

  static getFreeRoom() {
    return prisma.rooms.findMany();
  }

  static deleteVisitor(id: number) {
    return prisma.visitors.delete({
      where: {
        id: id,
      },
    });
  }
}
