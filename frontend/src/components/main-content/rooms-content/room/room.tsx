import { useDispatch } from 'react-redux'
import './room.css'
import { addNewVisitor } from '../../../../action/action';

interface newVisitor {
    roomId: number
    name: string,
    startDate: string | Date,
    endDate: string | Date
}

interface FreeRooms {
    id: number,
    type: string,
    class: string,
    visitors: []
}

const reservateRoom = (newVisitor: newVisitor, id: number, dispatch: any) => {
    newVisitor.roomId = id;
    newVisitor.startDate = new Date(newVisitor.startDate)
    newVisitor.endDate = new Date(newVisitor.endDate)
    dispatch(addNewVisitor(newVisitor));
    alert('Ok. You reservate rooms. Wait call')
}

export const Room = ({state} : any) => {
    const dispatch = useDispatch()
    if (state.freeRooms !== undefined) {
        return state.freeRooms.map((fr: FreeRooms) => {
            return (
            <div className='room' key={`room${fr.id}`}>
                <h3>Room {fr.id}</h3>
                <p>{fr.class} {fr.type} room</p>
                <button onClick={() => reservateRoom(state.newVisitor, fr.id, dispatch)}>Reservate</button>
            </div>
            )
        })

    }
    else return <></>
    
}