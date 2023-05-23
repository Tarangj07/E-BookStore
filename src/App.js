import { Routes, Route, Link, BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@emotion/react';

import './App.css';
import Home from './pages/Home'
import Apple from './pages/Apple'
import NotFound from './pages/NotFound'
// import { globalStyles } from './constants';
import appStyle from './AppStyle.module.css';
// import Logo from './images/logo.svg'
import { theme } from './styles_Theme'


function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        {/* <img src={Logo} alt="App Logo" /> */}
        <img src={`${process.env.REACT_APP_HOSTED_URL}logo192.png`} alt="App Logo" />
        <BrowserRouter>
          {/* <div className="App"> */}
          {/* <div style={{ padding: "5px", display: "flex", columnGap: "10px" }}> */}
          {/* <div className='navbar-style'> */}
          {/* <div style={{
        ...globalStyles.navbar,
      }}> */}
          <div className={appStyle.navbarStyle}>
            <Link to="/">Home</Link>
            <Link to="/apple">Apple</Link>
            <Link to="/notfound">Notfound</Link>
          </div>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/apple" element={<Apple />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
