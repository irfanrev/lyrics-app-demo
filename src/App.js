import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './Home';
import Lyrics from './components/Lyrics';
import Footer from './components/Footer';



function App() {
  return (
    <Router>
            <Navbar />
            <Routes>
                <Route exact path={'/'} element={<Home />} />
                <Route path={'/search/lyrics/:id'} element={<Lyrics />} />
            </Routes>
            <Footer />
        </Router>
  );
}

export default App;
