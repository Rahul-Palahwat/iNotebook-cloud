import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import About from './components/About';

function App() {
  return (
    <>
    <Router>
    <Navbar/>
    <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/about" element={<About />}></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
