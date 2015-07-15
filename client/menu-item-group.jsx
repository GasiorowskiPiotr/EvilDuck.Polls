import React from 'react';
import _ from 'lodash';

export default class MenuItemGroup extends React.Component {
  render() {

    var routes = this.props.routeHints.split(',');

    var activeClassName = "treeview ";

    var {router} = this.context;
    if(router && routes.length > 0) {
      var matchesItemRoute = _.find(routes, (r) => {
        r === router.isActive(r, false);
      });

      if(matchesItemRoute) {
        activeClassName += "active ";
      }
    }

    var icon = "fa " + this.props.iconCls;

    return (
      <li className={activeClassName}>
        <a href="#">
          <i className={icon}></i>
          <span>{this.props.title}</span>
          <i className="fa fa-angle-left pull-right"></i>
        </a>
        <ul className="treeview-menu">
          {this.props.children}
        </ul>
      </li>
    );
  }

  getDefaultProps() {
    return {
      routeHints: "",
      iconCls: 'fa-circle-o'
    }
  }
}

MenuItemGroup.propTypes = {
  routeHints: React.PropTypes.string,
  iconCls: React.PropTypes.string,
  title: React.PropTypes.string.isRequired
};

MenuItemGroup.contextTypes = {
    router: React.PropTypes.object
};
