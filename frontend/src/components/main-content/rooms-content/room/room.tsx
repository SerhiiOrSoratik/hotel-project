import { useDispatch } from 'react-redux'
import './room.css'
import { addNewVisitor, filterRooms } from '../../../../action/action';
import { FreeRooms, NewVisitor, State } from '../../../../interfaces/interfaces';
import { FC } from 'react';

interface props {
    state: State
}

export const Room: FC<props> = ({state}) => {
    const dispatch = useDispatch()

    const reservateRoom = (newVisitor: NewVisitor, id: number) => {
        newVisitor.roomId = id;
        newVisitor.startDate = new Date(newVisitor.startDate)
        newVisitor.endDate = new Date(newVisitor.endDate)
        dispatch(filterRooms(id))
        dispatch(addNewVisitor(newVisitor));
        alert('Ok. You reservate rooms.')
    }
        return <> {state.freeRooms.map((fr: FreeRooms) => {
            return (
            <div className='room' key={`room${fr.id}`}>
                <h3>Room {fr.id}</h3>
                <p>{fr.class} {fr.type} room</p>
                <button onClick={() => reservateRoom(state.newVisitor, fr.id)}>Reservate</button>
            </div>
            )
        })} </>
    
}