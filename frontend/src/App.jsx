
import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import Nav from './components/Nav';
import About from './pages/About';
import Major from './pages/Major';
import Profile from './pages/Profile';
import LoginForm from "./pages/Login";
function App() {

  return (

    <Routes>
      <Route path="/" element={ <Nav /> }>
        <Route index element={ <Home /> } />
        <Route path="/about" element={ <About /> } />
        <Route path="/major" element={ <Major /> } />
        <Route path="/profile" element={ <Profile /> } />
        <Route path="/login" element={<LoginForm/>} />
        <Route path="*" element={ <h1>Page Not Found</h1> } />
        
      </Route>
      
    </Routes>

  );
}

export default App;
