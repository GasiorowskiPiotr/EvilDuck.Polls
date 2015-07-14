import React from 'react';
import { Link } from 'react-router';

export default class MenuItem extends React.Component {

  render() {
    var icon = this.props.iconCls || 'fa-circle-o';
    icon = 'fa ' + icon;

    var {router} = this.context;

    var activeClassName = "";
    if(router && router.isActive(this.props.route, false)) {
      activeClassName = "active";
    }


    return (
      <li className={activeClassName}>
        <Link to={this.props.route}>
          <i className={icon}></i> <span>{this.props.title}</span>
        </Link>
      </li>
    );
  }
}

MenuItem.propTypes = {
  route: React.PropTypes.string.isRequired,
  iconCls: React.PropTypes.string,
  title: React.PropTypes.string.isRequired
};

MenuItem.contextTypes = {
    router: React.PropTypes.object
};
