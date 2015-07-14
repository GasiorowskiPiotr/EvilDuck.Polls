import React from 'react';

export default class UserInfo extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    let image = this.props.userImage || '/images/user.png';

    return (
      <li className="dropdown user user-menu">
        <a href="#" className="dropdown-toggle" data-toggle="dropdown">
          <span className="hidden-xs">{this.props.username}</span>
        </a>
        <ul className="dropdown-menu">
          <li className="user-header">
            <img src={image} className="img-circle" alt="User Image" />
            <p>{this.props.username}</p>
          </li>
          <li className="user-footer">
            <div className="pull-left">
              <a href="#" className="btn btn-default btn-flat">Profil</a>
            </div>
            <div className="pull-right">
              <a href="#" className="btn btn-default btn-flat">Wyloguj</a>
            </div>
          </li>
        </ul>
      </li>
    );
  }
}

UserInfo.propTypes = {
  username: React.PropTypes.string.isRequired,
  userImage: React.PropTypes.string
};
