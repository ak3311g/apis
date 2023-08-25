import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Headers from './components/Header'
import './App.css'
import Home from './pages/Home'
import About from './pages/about'
import Contact from './pages/contacts'
import Page404 from './pages/404page'
import Marvel from './pages/marvel'
import Digimon from './pages/digimon'
import Weather from './pages/weather'

function App() {

  return (
    <>
      <BrowserRouter>
        <Headers />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/marvel" element={<Marvel />} />
          <Route path="/digimon" element={<Digimon/>}/>
          <Route path="/weather" element={<Weather/>}/>
          <Route path='*' element={<Page404/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
