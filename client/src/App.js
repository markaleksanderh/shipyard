import React, { Component } from 'react';

import Header from './components/Header/Header'
// import ProjectForm from './components/ProjectForm/ProjectForm'
import NoteList from './components/NoteList/NoteList'
import NoteForm from './components/NoteForm/NoteForm'
// import ClientList from './components/ClientList/ClientList'
// import ProjectList from './components/ProjectList/ProjectList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        {/* <ProjectList /> */}
        <NoteForm />
        <NoteList />
        {/* <ClientList /> */}
      </div>
);
  }
}
export default App;