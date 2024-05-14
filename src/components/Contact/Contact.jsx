import { FaPhoneAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import css from './Contact.module.css'

export default function Contact({ data: { id, name, number }, onDelete }) {
    return (
        <div className={css.contactGroup}>
            <ul className={css.list}>
                <li><FaUser className={css.svg} /> {name}</li>
                <li><FaPhoneAlt className={css.svg}/> {number}</li>
            </ul>
            <button className={css.btn} onClick ={() => onDelete(id)}>Delete</button>
        </div>
    )
}
