import './room.css'

const reservateRoom = () => {
    alert('Okey man, its good room')
}

export const Room = () => {
    return (
        <div className='room'>
            <h3>Room 124</h3>
            <p>SGL Luxury room</p>
            <button onClick={() => reservateRoom()}>Reservate</button>
            </div>
    )
}