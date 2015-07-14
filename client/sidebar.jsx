import React from 'react';

export default class SideBar extends React.Component {
  render() {
    return (
      <aside className="main-sidebar">
        <section className="sidebar">
          {this.props.children}
        </section>
      </aside>
    );
  }
}
