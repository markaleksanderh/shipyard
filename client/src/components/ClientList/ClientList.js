import React, {Component} from 'react';

import axios from 'axios';

export default class ClientList extends Component {
  state = {
    notes: []
  }

  componentDidMount() {
    axios.get(`http://localhost:8080/clients/all`)
      .then(res => {
        const clients = res.data;
        this.setState({ clients });
      })
  }

  render() {
    return (
      <ul>
        { this.state.clients.map(client => <li>{client.name}</li>)}
      </ul>
    )
  }
}