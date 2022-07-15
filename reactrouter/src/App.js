
import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import Home from './pages/Home';
import About from './pages/About';
import Contact from "./pages/Contact"

function App() {
  return (
  <Router>
    <nav>
      <Link to = "/">Home</Link>
      <Link to = "/about">About</Link>
      <Link to = "/contact">Contact</Link>
    </nav>
    <Routes>
      <Route path = "/" element = {<Home />}/>
      <Route path = "/About" element = {<About />}/>
      <Route path = "/Contact" element = {<Contact />}/>
    </Routes>
    <div>This nav bar works.. I dont think Ill get to add css yet.</div>
  </Router>
  )
}

export default App;
