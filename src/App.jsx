import React, { useState, useEffect } from 'react';
import ContactList from './components/ContactList';
import SelectedContact from './components/SelectedContact';
import './App.css';


function App() {
  const [selectedContact, setSelectedContact] = useState(null);

  return (
    <div className="App">
      {selectedContact ? (
        <SelectedContact contact={selectedContact} setSelectedContact={setSelectedContact} />
      ) : (
        <ContactList setSelectedContact={setSelectedContact} />
      )}
    </div>
  );
}

export default App;
