import React, {Component} from 'react';

import axios from 'axios';

export default class NoteList extends Component {
  state = {
    notes: []
  }

  componentDidMount() {
    axios.get(`http://localhost:8080/notes/all`)
      .then(res => {
        const notes = res.data;
        this.setState({ notes });
      })
  }

  render() {
    return (
      <ul>
        { this.state.notes.map(note => <li key={note.id}>{note.description} - {note.createdAt}</li>)}
      </ul>
    )
  }
}