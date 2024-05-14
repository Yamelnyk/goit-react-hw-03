import ContactForm from "../ContactForm/ContactForm"
import SearchBox from "../SearchBox/SearchBox"
import ContactList from "../ContactList/ContactList"
import initialcontacts from "../../contact.json"
import { useState, useEffect } from "react"
import css from './App.module.css'


export default function App() {
    const [contacts, setContacts] = useState(() => {
        const savedContacts = window.localStorage.getItem("saved-contacts");
        if (savedContacts !== null) {
            return JSON.parse(savedContacts);
        }
        return initialcontacts;
    });

    useEffect(() => { localStorage.setItem("saved-contacts", JSON.stringify(contacts)) }, [contacts]);

    const addContact = (newContact) => {
        setContacts((prevContacts) => {
            return [...prevContacts, newContact];
        });
    }

    const [filter, setFilter] = useState('');

    const deleteContact = (contactId) => {
        setContacts((prevContacts) => {
            return prevContacts.filter((contact) => contact.id !== contactId);
        })
    }

    const visibleContacts = contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()));


    return (
<div className={css.container}>
            <h1>Phonebook</h1>
            <ContactForm onAdd={addContact} />
            <SearchBox value={filter} onFilter={setFilter} />
            <ContactList contacts={visibleContacts} onDelete={deleteContact} />
</div>

    )
}




