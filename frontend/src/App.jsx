import React, { createContext, useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from './components/Header';
import Home from './components/Home';
import Send from './components/Send';

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
          </Routes>
        </BrowserRouter>
      </DarkModeContext.Provider>
    </>
  );
}