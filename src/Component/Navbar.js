import React from 'react'
import UserImage from '../images/eddy.JPG'
import About from './About'
import Home from './Home'
import Contact from './Contact'
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


const Navbar = () => {
    return (
      <div>
      <nav className="main-header navbar navbar-expand navbar-white navbar-light">
        <ul className="navbar-nav">
          <li className="nav-item d-sm-none ">
            <a href="/" className="nav-link ">
            <div className="user-panel d-flex">
        <div className="image">
          <img src={UserImage} className="img-circle " alt="User Image" /> 
        </div>
        <div className="info">
          <strong className="d-block">Ngizwenayo Edison</strong>
        </div>
      </div>
            </a>
          </li>
          <li className="nav-item pl-5">
            <a className="nav-link d-sm-none" data-widget="pushmenu" href="#" role="button"><i className="fa fa-bars mybar"></i></a>
          </li>
        </ul>
        </nav>

  <aside className="main-sidebar sidebar-dark-primary elevation-4">
    <div className="sidebar">
      <div className="user-panel mt-3 pb-3 mb-3 d-flex">
        <div className="image">
          <img src={UserImage} className="img-circle elevation-2" width="100px" height="100px" alt="User Image" /> 
        </div>
        <div className="info">
          <a href="#" className="d-block">Ngizwenayo Edison</a>
        </div>
      </div>
      <nav className="mt-2">
      <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          <li className="nav-item has-treeview menu-open">
            <a href="#" className="nav-link">
            <i className="nav-icon fa fa-user"></i>
              <p className="text-white">
                 Software Developer
                
              </p>
            </a>
            <div className="dropdown-divider"></div>
            <ul className="nav nav-treeview">
              <li className="nav-item pt-4 ">
                <a href="/" className="nav-link">
                <p className="text-white ">
                  <i className="fa fa-home  menuIcon "></i>
                  Home</p>
                </a>
              </li>
              <li className="nav-item pt-4">
                <a href="/about" className="nav-link">
                <p className="text-white">
                  <i className="fa fa-user pr-3 menuIcon"></i>
                  About</p>
                </a>
              </li>
              <li className="nav-item pt-4 ">
                <a href="/workflow" className="nav-link">
                  <p className="text-white">
                  <i className="fa fa-cube nav-icon pr-3 menuIcon"></i>
                  My Workflow</p>
                </a>
              </li>
              <li className="nav-item pt-4">
                <a href="/contact" className="nav-link">
                  <p className="text-white">
                  <i className="fa fa-address-card pr-3 menuIcon"></i>
                  Contact</p>
                </a>
              </li>
              
            </ul>
          </li>
          </ul>
          </nav>
        </div>
        </aside>
        </div>
       
    
    
)
}

export default Navbar
