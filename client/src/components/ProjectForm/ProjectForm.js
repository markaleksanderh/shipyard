import React, {Component} from 'react';

import axios from 'axios';

// handleSubmit = event => {
//   event.preventDefault();
//   const user = {
//     name: this.state.name
//   }
//   axios.post('https://jsonplaceholder.typicode.com/users', { user })
//     .then(res=>{
//       console.log(res);
//       console.log(res.data);
//       window.location = "/retrieve" //This line of code will redirect you once the submission is succeed
//     })
// }

export default class ProjectForm extends Component {
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
      console.log('A project was submitted: ' + this.state.value);
      event.preventDefault();
      const project = {
        title: this.state.title,

      }
      axios.post('http://localhost:8080/projects', project)
        .then(res=> {
          console.log(res);
          console.log(res.data);
          window.location = "/retrieve"
        })
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <h6>Add new project</h6>
          <label>
            Project title:
            <input type="text" name="title" value={this.state.value} onChange={this.handleChange} />
            {/* <input type="text" name="description" value={this.state.value} onChange={this.handleChange} /> */}
            <input type="number" name="id" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }