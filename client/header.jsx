import React from 'react';

export default class Header extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let shortTitle = this.props.shortTitle || "";

    return (<header className="main-header">
      <a href="#" className="logo">
        <span className="logo-mini">{shortTitle}</span>
        <span className="logo-lg">{this.props.title}</span>
      </a>
      <nav className="navbar navbar-static-top" role="navigation">
        <a href="#" className="sidebar-toggle" data-toggle="offcanvas" role="button">
          <span className="sr-only">Włącz/wyłącz nawigację</span>
        </a>
        <div className="navbar-custom-menu">
          <ul className="nav navbar-nav">
            {this.props.children}
          </ul>
        </div>
      </nav>
    </header>);
  }
}

Header.propTypes = {
  title: React.PropTypes.string.isRequired,
  shortTitle: React.PropTypes.string,
  children: React.PropTypes.arrayOf(React.PropTypes.element)
};
