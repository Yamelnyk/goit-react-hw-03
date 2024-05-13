import ContactForm from "../ContactForm/ContactForm"
import SearchBox from "../SearchBox/SearchBox"
import ContactList from "../ContactList/ContactList"
import initialcontacts from "../../contact.json"
import { useState } from "react"


export default function App() {
    const [contacts, setContacts] = useState(initialcontacts);

    const addContact = (newContact) => {
        setContacts((prevContacts) => {
            return [...prevContacts, newContact];
        });
    }

    const [filter, setFilter] = useState('');

    const deleteContact = (contactId) => {
        setContacts((prevContacts) => {
            return prevContacts.filter(contact => contact.id !== contactId);
        })
    }

    const visibleContacts = contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()));


    return (
<div>
            <h1>Phonebook</h1>
            <ContactForm onAdd={addContact} />
            <SearchBox value={filter} onFilter={setFilter} />
            <ContactList contacts={visibleContacts} onDelete={deleteContact} />
</div>

    )
}




