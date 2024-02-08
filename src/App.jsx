import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route, Link, Outlet} from 'react-router-dom'; // BrowserRouter as Router로 수정
import Layout from './Layout'; // Layout 컴포넌트 임포트

import Header from './Header.jsx'
import Face from './Face.jsx';
import Body from './Body.jsx';
import Seoul from './Seoul.jsx';
import Gyunggi from './Gyunggi.jsx';
import Gangwon from './Gangwon.jsx';
import Choong from './Choong.jsx';
import Jeonra from './Jeonra.jsx';
import Gyungsang from './Gyungsang.jsx';
import Jeju from './Jeju.jsx';
import Gwangju from './Gwangju.jsx';


function App() {
  const Layout = () => {
    return(
      <>
        <Header/>
        <Outlet/>
      </>
    )
  }
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Face />} />
        <Route element={<Layout />}>
          <Route path="/body" element={<Body/>} />
          <Route path="/body/seoul" element={<Seoul/>} />
          <Route path="/body/gyunggi" element={<Gyunggi />} />
          <Route path="/body/gangwon" element={<Gangwon />} />
          <Route path="/body/choong" element={<Choong />} />
          <Route path="/body/jeonra" element={<Jeonra />} />
          <Route path="/body/gyungsang" element={<Gyungsang />} />
          <Route path="/body/jeju" element={<Jeju />} />
          <Route path="/body/gwangju" element={<Gwangju />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}



export default App;
