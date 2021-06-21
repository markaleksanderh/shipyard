import React, {Component} from 'react';

export default class Header extends Component {
  render() {
    return (
      <div>
        <h1>Shipyard</h1>
        <h3>Menu</h3>
        <ul>
        <li><a href="/companies">Companies</a>companies</li>
        <li><a href="/projects">Projects</a></li>
        </ul>
      </div>
    )
  }
}
