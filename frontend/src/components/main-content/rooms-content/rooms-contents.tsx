import './rooms-content.css'
import { Room } from "./room/room"
import { useSelector } from 'react-redux'


export const RoomsContent = () => {

    const freeRooms = useSelector(state => state)
    return (
        <div className="room-content">
            <Room freeRooms={freeRooms}/>
        </div>
    )
}