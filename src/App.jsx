

import './App.css';

import React from 'react';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'; // BrowserRouter as Router로 수정
import Face from './Face.jsx';
import Body from './Body.jsx';

function App() {
    return (
      <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Face/>} />
        <Route path='/body' element={<Body/>}/>
      </Routes>
      
      </BrowserRouter>
      </>
      
    );
}

export default App;
