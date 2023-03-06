
// import React from "react";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// function App() {
//   return (
//   );
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// function App() {
//   return (
//   );
// }






import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
function Navbar() {
  return (
    <div>
      <Router>
        <nav className="flex gap-20 pt-5 bg-blue-800 h-20 ">
          <p className="text-3xl ml-5 text-yellow-400">  <i class="fa-brands fa-atlassian">liyan</i></p>
      
          
          <ul className="flex ml-96 gap-20 text-white text-3xl">
            <li>
              <Link to="./About">About</Link>
            </li>
            <li>
              <Link to="/Services">Services</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </Router>

    </div>
  )
}

export default Navbar
