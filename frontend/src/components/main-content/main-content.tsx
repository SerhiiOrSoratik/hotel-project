import { RoomsContent } from "./rooms-content/rooms-contents"
import './main-content.css'
import { Form } from "./form/form"
export const MainContent = () => {
    return (
        <div className="main-content">
            <Form />
            <hr />
            <RoomsContent />
        </div>
    )
}