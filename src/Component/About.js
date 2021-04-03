import React from 'react'
import {motion} from "framer-motion";
import './about.css';

const About = () => {
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
        <motion.div initial="initial" animate="in" exit="out" variants={PageVariants} transition={PageTransition}
        className="mainAbout"> 
           <div className="row myabout d-flex flex-column justify-content-center">
            <div className="col-sm-3"></div> 
            <div className="col-sm-6">
               <h1 className="d-flex justify-content-center pl-5 text-white">About</h1> 
                </div> 
            <div className="col-sm-3"></div>   
            </div> 
            <div className="row pl-3">
                <b><strong style={{fontSize:"18px"}}>About me</strong></b> 
                <p>
                My name is Edison Ngizwenayo, I’m graduate Software Developer.I work either on site or even remotely, I've spent the last 2years as a Junior web and mobile application developer specialized mostly in Laravel and React JS. I'm really passionate at transforming beautiful designs into full-fledged interactive web applications for various clients all around the world as well as developing clean and effective Restful API.

My job involves doing what I love, developing new websites and applications. I absolutely love learning new things and taking on new challenges.For further detail about my professional capabilities and experience in software development domain.
                </p>
            </div>
            </motion.div>
    )
}

export default About
