import React from 'react';

import axios from 'axios';

export default class ProjectList extends React.Component {
  state = {
    projects: []
  }

  componentDidMount() {
    axios.get(`localhost:8080/projects/all`)
      .then(res => {
        const projects = res.data;
        this.setState({ projects });
      })
  }

  render() {
    return (
      <ul>
        { this.state.projects.map(project => <li>{project.title}</li>)}
      </ul>
    )
  }
}