import React, {Component} from 'react';

import axios from 'axios';

export default class CompanyForm extends Component {
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
      event.preventDefault();
      const company = {
        company: this.state.name
      }
      axios.post('http://localhost:8080/companies', { company })
        .then(res=> {
          console.log(res);
          console.log(res.data);
          window.location = "/retrieve"
        })
        .catch(error => {
            console.log(error)
        })
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <h6>Add new note</h6>
          <label>
            Company name:
            <input type="text" name="name" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }