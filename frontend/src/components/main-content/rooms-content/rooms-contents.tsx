import './rooms-content.css'
import { Room } from "./room/room"
import { useSelector } from 'react-redux'


export const RoomsContent = () => {

    const state = useSelector(state => state)
    return (
        <div className="room-content">
            <Room state={state}/>
        </div>
    )
}