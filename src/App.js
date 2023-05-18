import './App.css';
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom'

import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import NotFound from './pages/NotFound'


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/">Home</Link> &nbsp;
        <Link to="/aboutus">About Us</Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/aboutus" element={<AboutUs />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
