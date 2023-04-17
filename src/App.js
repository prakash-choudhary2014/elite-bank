import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import { Home } from "./components/Pages/Home";
import { About } from "./components/Pages/About";
import { Blog } from "./components/Pages/Blog";

import { Tickets } from "./components/Pages/Tickets";
import {Card} from "./components/Pages/Card"
import { Clients } from "./components/Pages/Clients";
import { Companies } from "./components/Pages/Companies";
import { Footer } from "./components/Pages/Footer";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <div className="pages">
          <Home/> 
          <Tickets/>
          <About/>
          <Blog/>
          <Card/>
          <Clients/>
          <Companies/>
          <Footer/> 
        </div> 
      </Router>
  </>
  );
}

export default App;
