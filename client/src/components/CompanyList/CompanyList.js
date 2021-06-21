import React, {Component} from 'react';

import axios from 'axios';

export default class CompanyList extends Component {
  state = {
    companies: []
  }

  componentDidMount() {
    axios.get(`http://localhost:8080/companies`)
      .then(res => {
        const companies = res.data;
        this.setState({ companies });
      })
  }

  render() {
    return (
      <ul>
        { this.state.companies.map(company => <li key={company.id}>{company.name}</li>)}
      </ul>
    )
  }
}