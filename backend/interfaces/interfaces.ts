export interface FreeRooms {
  name: string;
  type: string;
  class: string;
  reservation_start_date: string | Date;
  reservation_end_date: string | Date;
}
