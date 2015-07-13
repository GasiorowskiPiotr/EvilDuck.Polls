import React from 'react';
import { RouteHandler } from 'react-router';
import Header from './header.jsx';
import UserInfo from './userInfo.jsx';

export default class Main extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Header title="Admin" shortTitle="A">
          <UserInfo username="Piotr Gąsiorowski"></UserInfo>
        </Header>
        <RouteHandler/>
      </div>
    );
  }
}
