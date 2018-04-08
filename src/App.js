import React, { Component } from 'react';


class ContactList extends React.Component {
  render() {
    const people = this.props.contacts

    return (
    <ol>
      {people.map((person) => (
        <li key={person.name}>{person.name}</li>
      ))}
    </ol>
    )
  }
}


class App extends Component {
  render() {
    return (
      <div className="App">
        <ContactList contacts={[
          { name: 'Paul'},
          { name: 'Tim'},
          { name: 'Danny'}
        ]} />
        <ContactList contacts={[
          { name: 'Aaron' },
          { name: 'Steve' },
          { name: 'Trey' }
        ]} />
      </div>
    );
  }
}

export default App;
