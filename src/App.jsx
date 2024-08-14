import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Layout } from 'antd';
import LoadingPage from './components/LoadingPage';
import Photos from './components/Photos';
import { initKeycloak } from './services/auth';

const { Header, Footer } = Layout;

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    initKeycloak()
      .then(() => {
        setIsAuthenticated(true);
        setIsLoading(false);
      })
      .catch(() => {
        setIsAuthenticated(false);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <Router>
      <Layout>
        <Header style={{ position: 'sticky', display: 'flex', alignItems: 'center', color: 'white' }}>
          <h3>Welcome To React Together</h3>
        </Header>
        <Routes>
          <Route 
            path="/" 
            element={isAuthenticated ? <Navigate to="/photos" replace /> : <LoadingPage />} 
          />
          <Route 
            path="/photos" 
            element={isAuthenticated ? <Photos /> : <Navigate to="/" replace />} 
          />
        </Routes>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Router>
  );
};

export default App;
