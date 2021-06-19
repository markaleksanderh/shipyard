import React, {Component} from 'react';

import axios from 'axios';

export default class NoteForm extends Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      console.log('A note was submitted: ' + this.state.value);
      event.preventDefault();
      const note = {
        note: this.state.title
      }
      axios.post('localhost:8080/notes', { note })
        .then(res=> {
          console.log(res);
          console.log(res.data);
          window.location = "/retrieve"
        })
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <h6>Add new note</h6>
          <label>
            Note title:
            <input type="text" name="title" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }