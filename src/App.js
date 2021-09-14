import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FcConferenceCall, FcContacts } from "react-icons/fc";

import { ContactForm } from './components/ContactForm/ContactForm';
import { Filter } from './components/Filter/Filter';
import { ContactList } from './components/ContactList/ContactList';
import useLocalStorage from './hooks/useLocalStorage';
import './App.css';

function App() {
  const [contacts, setContacts] = useLocalStorage('Contacts', []);
  const [filter, setFilter] = useState('');

  const addContact = (name, number) => {
    const shortid = require('shortid');

    const contact = {
      id: shortid.generate(),
      name,
      number,
    };

    const searchSameContact = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (searchSameContact) {
      toast.error(`Oops.. ${name} is already in your contacts`,
        { icon: "⛔", theme: "colored" });
      return;
    } else {
      setContacts(s => [...s, contact]);

      toast.success(`Added`,
        { icon: "✔️", theme: "colored" });
    };

  }

  const changeFilter = event => {
    setFilter(event.currentTarget.value);
  };

  const findContactByName = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()));
  };

  const deleteContact = contactId => {
    setContacts(state =>
      state.filter(contact => contact.id !== contactId)
    );

    toast.warn('Deleted',
      { icon: "✔️", theme: "colored" });
  };

  const visibleContacts = findContactByName();

  return (
    <div className="App">

      <h1 className="title">Phonebook <FcContacts className="titleIcon" /></h1>

      <ContactForm onSubmit={addContact} />

      <h2 className="title">Contacts <FcConferenceCall className="titleIcon" /></h2>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList contacts={visibleContacts} onDeleteContact={deleteContact} />

      <ToastContainer position="top-center"
        autoClose={4000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

    </div>
  );
}

export default App;
