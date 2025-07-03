
import {Routes, Route } from "react-router-dom";
import './App.css'
import Home from './components/Home';
import NavBar from './components/NavBar';
import About from './components/About';
import Major from './components/Major';
function App() {

  return (
    
      <Routes>
        <Route path="/" element={ <NavBar /> }>
          <Route index element={ <Home /> } />
          <Route path="/about" element={ <About /> } />
          <Route path="/major" element={ <Major /> } />
        </Route>
      </Routes>

  )
}

export default App
