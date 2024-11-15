import { useState } from 'react';

import Form from './components/Form'
import List from './components/List';

export default function App() {
  const [contacts, setContacts] = useState([]);

  const addContact = (contact) => {
    setContacts([...contacts, contact]);
  };
  const emptyContactsList = () => {
    setContacts([]);
  }

  return (
    <main className="container mt-4">
      <div className="row">
        <Form addContact={addContact} emptyContactsList={emptyContactsList}/>
        <List contacts={contacts}/>
      </div>
    </main>
  );
}