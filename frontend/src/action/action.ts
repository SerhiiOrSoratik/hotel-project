export const findFreeRooms = (data: any) => (dispatch : any) => {
    const {name, roomClass, roomType, startDate, endDate} = data;
    console.log(name, roomClass, roomType, startDate, endDate)
    return fetch(`http://localhost:3001/rooms/free?name=${name}&type=${roomType}&class=${roomClass}&reservation_start_date=${startDate}&reservation_end_date=${endDate}`)
    .then((res) => res.json())
    .then((data) =>
      dispatch({
        type: "FIND_FREE_ROOMS",
        data,
      })
    );
};