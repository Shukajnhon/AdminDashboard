import React from 'react';
import styled from 'styled-components';
import {UserOutlined} from '@ant-design/icons';

export const AvatarUser = () => {
  return (
    <UserStyle className="user">
      <UserOutlined />
    </UserStyle>
  );
};

const UserStyle = styled.div`
  margin: 0 20px;
  display: inline-block;
  line-height: 0;
  .anticon-user {
    text-align: center;
    font-size: 30px;
    line-height: 30px;
    cursor: pointer;
  }
  .anticon-user svg {
    width: 100%;
    height: 100%;
  }
`;
