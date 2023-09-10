import {BrowserRouter as Router , Route , Routes} from 'react-router-dom';

import Home from "../home";

export default function Main() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </Router>
  );
}
