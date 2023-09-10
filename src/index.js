import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Rescue from './components/Rescue';
import './styles/styles.css';
import './styles/header.css';
import './styles/sidebar.css';
import './styles/rescue.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='maindiv'>
    <Header />
    <Sidebar />
  </div>
);