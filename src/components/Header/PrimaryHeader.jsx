import {theme} from 'antd';
import {Header} from 'antd/es/layout/layout';
import Logo from 'components/Logo/Logo';
import {Notification} from 'components/Notification';
import {SearchInput} from 'components/Search';
import {AvatarUser} from 'components/AvatarUser';
import React from 'react';
import styled from 'styled-components';

const PrimaryHeader = () => {
  const {
    token: {colorBgContainer},
  } = theme.useToken();
  return (
    <div>
      <Header
        style={{
          padding: 0,
          background: colorBgContainer,
        }}
      >
        <NavbarStyle>
          {/* nav-left */}
          <div className="nav-left">
            <Logo></Logo>
            <div className="search-wrap">
              <SearchInput></SearchInput>
            </div>
          </div>

          {/* nav-right */}
          <div className="nav-right">
            <Notification></Notification>
            <AvatarUser></AvatarUser>
          </div>
        </NavbarStyle>
      </Header>
    </div>
  );
};

export default PrimaryHeader;

const NavbarStyle = styled.nav`
  display: flex;
  width: 100%;

  .nav-left {
    display: flex;
    align-items: center;
    width: 50%;
  }
  .nav-right {
    display: flex;
    justify-content: end;
    align-items: center;
    width: 50%;
  }
`;
