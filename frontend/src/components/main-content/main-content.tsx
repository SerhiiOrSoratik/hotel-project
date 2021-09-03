import { ReservationForm } from "./reservation-form/reservation-form"
import { RoomsContent } from "./rooms-content/rooms-contents"

export const MainContent = () => {
    return (
        <div>
            <ReservationForm />
            <RoomsContent />
        </div>
    )
}