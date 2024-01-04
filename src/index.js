import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { store } from './redux/store'
import { Provider } from 'react-redux';
import { AnalyticsProps } from '@vercel/analytics/*';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <AnalyticsProps/>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>
);

