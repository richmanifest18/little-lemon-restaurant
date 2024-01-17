import './App.css';
import logo from './images/logo.svg'
import Homepage from './Homepage'
import Reservations from './components/Reservations'
import {Routes, Route, Link} from 'react-router-dom'
import AboutUs from './components/AboutUs';

function App() {
  return (
    <div>
      <header className="header container">
            <div className="header__logo">
                <Link to="/"><img src={logo} alt="logo"/></Link>
            </div>
            <nav className="nav__bar">
                <ul className="header__menu">
                    <li>
                        <Link to="/" className="header__link">Home</Link>
                    </li>
                    <li>
                        <Link to="/AboutUs" className="header__link">About</Link>
                    </li>
                    <li>
                        <Link to="/Reservations" className="header__link">Reservations</Link>
                    </li>
                </ul>
            </nav>
        </header>
        <Routes> 
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/AboutUs" element={<AboutUs />}></Route>
        <Route path="/Reservations" element={<Reservations />}></Route>
      </Routes>
    </div>
  );
}

export default App;
