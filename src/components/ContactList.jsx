import React, { useState, useEffect } from 'react';
import ContactRow from './ContactRow';

function ContactList({ setSelectedContact }) {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    async function fetchContacts() {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      setContacts(data);
    }
    fetchContacts();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map(contact => (
          <ContactRow key={contact.id} contact={contact} setSelectedContact={setSelectedContact} />
        ))}
      </tbody>
    </table>
  );
}

export default ContactList;
