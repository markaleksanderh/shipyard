import React, {Component} from 'react';

import axios from 'axios';

export default class ProjectList extends Component {
  state = {
    projects: []
  }

  componentDidMount() {
    axios.get(`http://localhost:8080/projects`)
      .then(res => {
        const projects = res.data;
        this.setState({ projects });
      })
  }

  render() {
    return (
      <ul>
        { this.state.projects.map(project => <li key={project.id}>{project.title}</li>)}
      </ul>
    )
  }
}