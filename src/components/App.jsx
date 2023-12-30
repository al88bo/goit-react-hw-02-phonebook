import { nanoid } from 'nanoid';
import { Component } from 'react';
import { SectionWrapper } from './SectionWrapper/SectionWrapper';
import { ContactsForm } from './ContactsForm/ContactsForm';
import { ContactsList } from './ContactsList/ContactsList';
import { ContactsListFilter } from './ContactsListFilter/ContactsListFilter';

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

  addContact = formData => {
    const hasDuplicate = this.state.contacts.some(
      profile => profile.name.toLowerCase() === formData.name.toLowerCase()
    );
    if (hasDuplicate) return alert(`${formData.name} is already in contacts.`);
    formData.id = nanoid();
    this.setState(prevState => ({
      contacts: [...prevState.contacts, formData],
    }));
  };
  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(obj => obj.id !== contactId),
    }));
  };
  changeFilter = e => {
    this.setState(() => ({ filter: e.target.value }));
  };
  render() {
    const filteredContacts = this.state.contacts.filter(obj =>
      obj.name.toLowerCase().includes(this.state.filter.trim().toLowerCase())
    ); // (Note: any string includes an empty string)
    return (
      <SectionWrapper title="Phonebook">
        <ContactsForm addContact={this.addContact} />
        <h2>Contacts</h2>
        <ContactsListFilter
          filter={this.state.filter}
          changeFilter={this.changeFilter}
        />
        <ContactsList
          contacts={filteredContacts}
          deleteContact={this.deleteContact}
        />
      </SectionWrapper>
    );
  }
}

export { App };
