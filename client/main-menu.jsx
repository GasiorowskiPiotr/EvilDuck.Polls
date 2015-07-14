import React from 'react';

export default class MainMenu extends React.Component {
  render() {
    return (
      <ul className="sidebar-menu">
        <li className="header">{this.props.title}</li>
        {this.props.children}
      </ul>
    );
  }
}
