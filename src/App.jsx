import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Importa i componenti di routing
import { ThemeProvider } from './context/ThemeContext'
import { LanguageProvider } from './context/LanguageContext'
import './App.css'
import Home from './pages/Home'
import LaMiaStoria from './pages/LaMiaStoria';
import Curriculum from './pages/Curriculum';
import Linguaggi from './pages/Linguaggi';
import Skills from './pages/Skills';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ThemeProvider>
      <LanguageProvider>
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} /> {/* Rotta per la Home */}
              <Route path="/la-mia-storia" element={<LaMiaStoria />} /> {/* Rotta per "La mia storia" */}
              <Route path="/curriculum" element={<Curriculum />} /> {/* Rotta per "Curriculum" */}
              <Route path="/linguaggi" element={<Linguaggi />} /> {/* Rotta per "Linguaggi di programmazione" */}
              <Route path="/skills" element={<Skills />} /> {/* Rotta per "Skills" */}
            </Routes>
         </BrowserRouter>
      </LanguageProvider>
    </ThemeProvider>
    </>
  )
}

export default App
