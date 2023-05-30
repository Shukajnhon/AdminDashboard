import React from 'react';
import styled from 'styled-components';
import logo from 'assets/imgs/logoAdmin.png';

const Logo = () => {
  return (
    <LogoStyle>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
    </LogoStyle>
  );
};

export default Logo;

const LogoStyle = styled.div`
  display: inline-block;
  .logo {
    width: 64px;
    /* height: 30px; */
    cursor: pointer;
  }
  .logo img {
    width: 100%;
  }
`;
