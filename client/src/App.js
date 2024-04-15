import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home/Home';
import Menu from './pages/Menu/Menu';
import Reservation from './pages/Reservation/Reservation';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/menu">Menu</Link></li>
          <li><Link to="/reservation">Reservation</Link></li>
          <li><Link to="/about">About Me</Link></li>
          <li><Link to="/contact">Contact Me</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
