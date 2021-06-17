import React, { Component } from 'react';

import Header from './components/Header/Header'
import NoteList from './components/NoteList/NoteList'
// import ClientList from './components/ClientList/ClientList'
// import ProjectList from './components/ProjectList/ProjectList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        {/* <ProjectList /> */}
        <NoteList />
        {/* <ClientList /> */}
      </div>
);
  }
}
export default App;