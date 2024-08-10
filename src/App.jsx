import React from 'react';
import { Layout, theme } from 'antd';
import FilterGroup from './components/filters/FilterGroup';
import Gallery from './components/Gallery';
import './index.css';

const { Header, Content, Footer } = Layout;

const App = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <Header
        style={{
          position: 'sticky',
          display: 'flex',
          alignItems: 'center',
          color: 'white',
        }}
      >
        <h3>Welcome To React Together</h3>
      </Header>
      <Content style={{ padding: '10px 48px' }}>
        <FilterGroup/>
        <div
          style={{
            background: colorBgContainer,
            margin: '20px 0 0 0',
            height: '100%',
            padding: 24,
            borderRadius: borderRadiusLG,
          }}
        >
          <Gallery/>
          
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default App;