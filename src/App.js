import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import LoginForm from './components/LoginForm';
import Portfolio from './components/Portfolio';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/login" element={<PublicRoute />} />
            <Route path="/portfolio" element={<ProtectedRoute />} />
            <Route path="/" element={<Navigate to="/portfolio" replace />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

function PublicRoute() {
  const { isAuthenticated, loading } = useAuth();
  
  if (loading) {
    return <div className="loading">Loading...</div>;
  }
  
  if (isAuthenticated) {
    return <Navigate to="/portfolio" replace />;
  }
  
  return <LoginForm />;
}

function ProtectedRoute() {
  const { isAuthenticated, loading } = useAuth();
  
  if (loading) {
    return <div className="loading">Loading...</div>;
  }
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  
  return <Portfolio />;
}

export default App;