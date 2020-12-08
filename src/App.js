import React, { Component } from 'react';
import shortid from 'shortid';
import s from './App.module.css';

import Section from './components/UI/Section/Section';
import Container from './components/UI/Container/Container';
import ContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList/ContactList';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  formSubmitHandler = ({ name, number }) => {
    const newContact = {
      id: shortid.generate(),
      name,
      number,
    };
    const { contacts } = this.state;

    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase(),
      )
    ) {
      alert(`${name} is already in contacts.`);
    } else if (contacts.find(contact => contact.number === number)) {
      alert(`${number} is already in contacts.`);
    } else if (name.trim() === '' || number.trim() === '') {
      alert("Enter the contact's name and number phone!");
    } else if (!/\d{3}[-]\d{2}[-]\d{2}/g.test(number)) {
      alert('Enter the correct number phone!');
    } else {
      this.setState(({ contacts }) => ({
        contacts: [newContact, ...contacts],
      }));
    }
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  render() {
    const { filter } = this.state;
    const normalazidFilter = this.state.filter.toLowerCase();
    const filteredContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalazidFilter),
    );
    return (
      <Section>
        <Container>
          <h1 className={s.Title}>Phonebook</h1>
          <ContactForm onSubmit={this.formSubmitHandler} />
          <h2 className={s.Title}>Contacts</h2>
          <Filter filter={filter} onChange={this.changeFilter} />
          <ContactList
            contacts={filteredContacts}
            onDeleteContact={this.deleteContact}
          />
        </Container>
      </Section>
    );
  }
}

export default App;
