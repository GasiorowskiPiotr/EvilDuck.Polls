import React from 'react';

export default class UserPanel extends React.Component {
  render() {
    let image = this.props.userImage || '/images/user.png';

    return (
      <div className="user-panel">
        <div className="pull-left image">
          <img src={image} className="img-circle" alt="User Image" />
        </div>
        <div className="pull-left info">
          <p>{this.props.username}</p>
        </div>
      </div>
    );
  }
}

UserPanel.propTypes = {
  username: React.PropTypes.string.isRequired,
  userImage: React.PropTypes.string
};
