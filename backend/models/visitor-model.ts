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

  static async getFreeRoom(params: any) {
    const rooms = await prisma.rooms.findMany({
      select: {
        id: true,
        type: true,
        class: true,
        visitors: {
          where: {
            AND: [
              {
                OR: [
                  {
                    reservation_end_date: {
                      gte: new Date(params.reservation_start_date)
                    },
                  },
                  {
                    reservation_end_date: {
                      gte: new Date(params.reservation_end_date)
                    },
                  }
                ]
              },
              {
                OR: [
                  {
                    reservation_start_date: {
                      lte: new Date(params.reservation_start_date)
                    },
                  },
                  {
                    reservation_start_date: {
                      lte: new Date(params.reservation_end_date)
                    },
                  }
                ]
              }
            ]
          }
      }
    },
      where: {
        type: params.type,
        class: params.class,
      }
    });
    const freeRooms = rooms.filter(fr => 
     fr.visitors.length < 1
    )
    return freeRooms
  }

  static deleteVisitor(id: number) {
    return prisma.visitors.delete({
      where: {
        id: id,
      },
    });
  }
}
