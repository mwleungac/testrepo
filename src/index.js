import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'antd/dist/antd.css';
import { Button, Layout, Space } from 'antd';
import MainContainer from './components/MainContainer'
import { CarOutlined } from '@ant-design/icons';

const { Header, Content, Footer } = Layout;

ReactDOM.render(
  <React.StrictMode>
    <Layout className="layout">
    <Header className="layoutHeader">
      <CarOutlined className="headerLogo" />
      <div className="loginAndRegister">
        <Space>
        <Button type="primary">Login</Button>
        <Button>Register</Button>
        </Space>
      </div>
    </Header>
    <Content className="layoutContent">
      <MainContainer />
    </Content>
    <Footer id="layoutFooter" style={{ textAlign: 'center' }}>All the right reserved by 500-YourThingIsBroken @copyright</Footer>
  </Layout>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
