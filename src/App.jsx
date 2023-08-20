import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Headers from './components/Header'
import './App.css'
import Home from './pages/Home'
import About from './pages/about'
import Contact from './pages/contacts'
import Page404 from './pages/404page'
import Wibu from './pages/wibu'

function App() {

  return (
    <>
      <BrowserRouter>
        <Headers />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/wibu" element={<Wibu />} />
          <Route path='*' element={<Page404/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
