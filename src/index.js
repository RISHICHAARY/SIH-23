import React from 'react';
import ReactDOM from 'react-dom/client';

import Main from './components/main';

import './styles/styles.css';
import './styles/header.css';
import './styles/sidebar.css';
import './styles/rescue.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Main />
);
