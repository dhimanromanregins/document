import React from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Harsh from './Harsh';
import Main from './Main';


export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/harsh" element={<Harsh />} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}
