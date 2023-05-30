import React from 'react';
import styled from 'styled-components';
import {Badge} from 'antd';
import {BellOutlined} from '@ant-design/icons';

export const Notification = () => {
  return (
    <NotificationStyled className="notification-wrap">
      <Badge count={0} showZero>
        <BellOutlined className="notification-icon"></BellOutlined>
      </Badge>
    </NotificationStyled>
  );
};

const NotificationStyled = styled.div`
  margin-right: 10px;
  display: inline-block;
  line-height: 0;
  .notification-icon {
    text-align: center;
    font-size: 30px;
    cursor: pointer;
  }
  .notification-icon svg {
    width: 100%;
    height: 100%;
  }
`;
