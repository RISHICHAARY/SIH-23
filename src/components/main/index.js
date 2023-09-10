import React from 'react';
import {BrowserRouter as Router , Route , Routes} from 'react-router-dom';

import Home from "../home";
import CenterAdd from '../centerAdd';

export default function Main() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/addCenter' element={<CenterAdd />} />
      </Routes>
    </Router>
  );
}
