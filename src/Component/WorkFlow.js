import React from 'react'
import {animate, motion} from "framer-motion"
import './skills.css';

const WorkFlow = () => {
    const PageVariants={
        initial:{
         y:"-50vh"
        },
        in:{
            y:"0vh"
        },
        out:{
            y:"-50vh"
        }

    };
    const PageTransition = {
        duration:0.7,
        transition:"linear",
        ease:"easeOut"
    };
    return (
        <motion.div initial="initial" animate="in" exit="out" variants={PageVariants} transition={PageTransition}>
        
        
        <div className="row myskills d-flex flex-column justify-content-center">
            <div className="col-sm-3"></div> 
            <div className="col-sm-6">
               <h1 className="d-flex justify-content-center pl-5 text-white">Skills</h1> 
                </div> 
            <div className="col-sm-3"></div> 
            </div> <br></br>
            <div className="row">
            <div className=" col-12 col-sm-7 offset-sm-1">
            <strong>Programming Skills</strong> <br></br>
            <div className="dropdown-divider"></div>
            <div className="card text-center">
  <div className="card-header">
  <h1 className="card-title">Front-End and Back-End skills</h1>
  </div>
  <div className="card-body">
    <ul className="listSkills">
      <li>HTML5, CSS3, Sass, Git</li>
      <li>Bootstrap</li>
      <li>React JS</li>
      <li>PHP</li>
      <li>Laravel</li>
    </ul>
    <div className="card-footer ">
    <strong>Other Skills</strong>
    <div className="dropdown-divider"></div>
    <ul className="listSkills">
      <li>Java</li>
      <li>Python</li>
      <li>Unix</li>
    </ul>
  </div>

  </div>
</div>
              </div>
            </div>
        </motion.div>
    )
}

export default WorkFlow
