export const findFreeRooms = (data: any) => (dispatch : any) => {
    const {name, roomClass, roomType, startDate, endDate} = data;
    const visitorInfo = {name, startDate, endDate};
    return fetch(`http://localhost:3001/rooms/free?name=${name}&type=${roomType}&class=${roomClass}&reservation_start_date=${startDate}&reservation_end_date=${endDate}`)
    .then((res) => res.json())
    .then((data) =>
      dispatch({
        type: "FIND_FREE_ROOMS",
        data,
        visitorInfo
      })
    );
};

export const addNewVisitor = (visitorInfo : any) => (dispatch: any) => {
  return fetch(`http://localhost:3001/rooms/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(visitorInfo),
  })
    .then((res) => res.json())
    .then((data) => {
      dispatch({
        type: "ADD_NEW_VISITOR",
        data,
      });
    });
};