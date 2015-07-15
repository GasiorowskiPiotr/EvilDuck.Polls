import React from 'react';
import { RouteHandler } from 'react-router';
import Header from './header.jsx';
import UserInfo from './userInfo.jsx';
import SideBar from './sidebar.jsx';
import UserPanel from './user-panel.jsx';
import MainMenu from './main-menu.jsx';
import MenuItem from './menu-item.jsx';
import MenuItemGroup from './menu-item-group.jsx';

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
              <MenuItem route="Home" title="Strona głowna"></MenuItem>
              <MenuItemGroup routeHints="First,Second,Third" title="Podmenu">
                <MenuItem route="First" title="Pierwsza"></MenuItem>
                <MenuItem route="Second" title="Druga"></MenuItem>
                <MenuItem route="Third" title="Trzecia"></MenuItem>
              </MenuItemGroup>
            </MainMenu>
        </SideBar>

        <RouteHandler/>
      </div>
    );
  }
}
