import './room.css'

const reservateRoom = () => {
    alert('Okey man, its good room')
}

export const Room = ({freeRooms} : any) => {
    if (freeRooms !== undefined) {
        return freeRooms.map((fr: any) => {
            return (
            <div className='room' key={`room${fr.id}`}>
                <h3>Room {fr.id}</h3>
                <p>{fr.class} {fr.type} room</p>
                <button onClick={() => reservateRoom()}>Reservate</button>
            </div>
            )
        })

    }
    else return <></>
    
}