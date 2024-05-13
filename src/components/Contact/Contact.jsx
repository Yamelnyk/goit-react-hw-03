import { FaPhoneAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

export default function Contact({ data: { id, name, number }, onDelete }) {
    return (
        <div>
            <ul>
                <li><FaUser /> {name}</li>
                <li><FaPhoneAlt /> {number}</li>
            </ul>
            <button onClick ={() => onDelete(id)}>Delete</button>
        </div>
    )
}
