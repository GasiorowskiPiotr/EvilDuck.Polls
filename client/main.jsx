import React from 'react';
import { RouteHandler } from 'react-router';
import Header from './header.jsx';
import UserInfo from './userInfo.jsx';
import SideBar from './sidebar.jsx';
import UserPanel from './user-panel.jsx';
import MainMenu from './main-menu.jsx';

export default class Main extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Header title="Admin" shortTitle="A">
          <UserInfo username="Piotr Gąsiorowski"></UserInfo>
        </Header>
        <SideBar>
          <UserPanel username="Piotr Gąsiorowski"></UserPanel>
            <MainMenu title="MENU GŁÓWNE">
              <li className="active treeview">
                <a href="#">
                  <i className="fa fa-dashboard"></i> <span>Dashboard</span> <i className="fa fa-angle-left pull-right"></i>
                </a>
                <ul className="treeview-menu">
                  <li className="active"><a href="index.html"><i className="fa fa-circle-o"></i> Dashboard v1</a></li>
                  <li><a href="index2.html"><i className="fa fa-circle-o"></i> Dashboard v2</a></li>
                </ul>
              </li>
            </MainMenu>
        </SideBar>

        <RouteHandler/>
      </div>
    );
  }
}
