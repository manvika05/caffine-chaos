import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/AboutUs';
import Header from './components/Header';
// Import other page components you'll need
import Menu from './pages/Menu';
import Contact from './pages/Contact';
import Reservation from './pages/Reservation';
import OnlineOrdering from './pages/OnlineOrdering';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* Add these routes to match your Header links */}
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/online-ordering" element={<OnlineOrdering />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;