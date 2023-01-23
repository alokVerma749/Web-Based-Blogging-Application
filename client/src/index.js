import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { AuthContextProvider } from './contexts/AuthContext.js'
import { AllBlogsContextProvider } from './contexts/AllBlogsContext.js'
import { UserBlogsContextProvider } from './contexts/UserBlogsContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <AllBlogsContextProvider>
          <UserBlogsContextProvider>
            <App />
          </UserBlogsContextProvider>
        </AllBlogsContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
