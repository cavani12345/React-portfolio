import './App.css';
import './index.css';
import './Component/Sidebar.css';
import React from "react"
import Navbar from "./Component/Navbar";
import Home from"./Component/Home";
import About from "./Component/About";
import Contact from "./Component/Contact";
import WorkFlow from './Component/WorkFlow'
import Footer from "./Component/Footer";
import {AnimatePresence, motion} from "framer-motion";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useLocation,
  useParams
} from "react-router-dom";

import {
  TransitionGroup,
  CSSTransition
} from "react-transition-group";

function App() {
  return (
    <Router>
    <div className="wrapper">
       <Navbar />
       <div className="content-wrapper">
        <section className="content">
          <AnimatePresence>
          <Switch>
          <Route path="/about" component={About}>
          </Route>
          <Route path="/contact" component={Contact}>
          </Route>
          <Route path="/workflow" component={WorkFlow}>
          </Route>
          <Route path="/" component={Home}>
          </Route>
             
        </Switch>
          </AnimatePresence>
        
        </section>
        </div> 
        <Footer />
    </div>
    </Router>
     
      
  );
}

export default App;
