import React, { createContext, useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from './components/Header';
import Home from './components/Home';
import Send from './components/Send';
import Receive from './components/Recieve';

export const DarkModeContext = createContext()

export default function App() {
  const [ darkMode, setDarkMode ] = useState(false)

  return (
    <>
      <DarkModeContext.Provider value={darkMode} >
        <BrowserRouter>
          <Header toggleMode={setDarkMode} />
          <Routes>
            <Route index element={<Home />} />
            <Route path="/send-message" element={<Send />} />
            <Route path='/recieve-message' element={<Receive />} />
          </Routes>
        </BrowserRouter>
      </DarkModeContext.Provider>
    </>
  );
}