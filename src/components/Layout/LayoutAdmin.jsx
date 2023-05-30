import React from 'react';
// import {Helmet} from 'react-helmet';

import {
  ShoppingOutlined,
  DashboardOutlined,
  UserOutlined,
  ShoppingCartOutlined,
  TeamOutlined,
  GiftOutlined,
} from '@ant-design/icons';
import {Breadcrumb, Layout, Menu, theme} from 'antd';
import {useState} from 'react';
import PrimaryHeader from 'components/Header/PrimaryHeader';
// import {useNavigate} from 'react-router-dom';

const {Content, Footer, Sider} = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem('Dashboard', '/', <DashboardOutlined />),
  getItem('User', '/user-page', <UserOutlined />),
  getItem('Customer', '/customer-page', <TeamOutlined />),
  getItem('Products', '/products-page', <ShoppingCartOutlined />),
  getItem('Orders', '/orders-page', <ShoppingOutlined />),
  getItem('Coupons', '/coupons-page', <GiftOutlined />),
];

export const LayoutAdmin = ({title, children}) => {
  const [collapsed, setCollapsed] = useState(false);

  // const navigate = useNavigate();

  const {
    token: {colorBgContainer},
  } = theme.useToken();
  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      {/* <Helmet>
        <title>{title}</title>
        <meta name="description" content="" />
      </Helmet> */}
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="demo-logo-vertical"></div>
        <Menu
          theme="dark"
          defaultSelectedKeys={['1']}
          mode="inline"
          items={items}
          // onClick={({key}) => navigate(key)}
        >
          {/* {console.log(items)} */}
        </Menu>
      </Sider>
      <Layout>
        {/* Header */}
        <PrimaryHeader></PrimaryHeader>
        <Content
          style={{
            margin: '0 16px',
          }}
        >
          <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
            {/* <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item> */}
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
            }}
          >
            {children}
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};
