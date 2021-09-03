export const findFreeRooms = (dispatch : any) => {

    return fetch(`http://10.0.0.227:3001/rooms/free`)
    .then((res) => res.json())
    .then((data) =>
      dispatch({
        type: "FIND_FREE_ROOMS",
        data,
      })
    );
};