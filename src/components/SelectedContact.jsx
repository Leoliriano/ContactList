import React from 'react';

function SelectedContact({ contact, setSelectedContact }) {
  return (
    <div>
      <h2>{contact.name}</h2>
      <p>Email: {contact.email}</p>
      <p>Phone: {contact.phone}</p>
      <button onClick={() => setSelectedContact(null)}>Back to contacts</button>
    </div>
  );
}

export default SelectedContact;
