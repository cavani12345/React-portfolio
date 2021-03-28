    import React from 'react'
    import {motion} from "framer-motion";
    import './home.css';

    const Home = () => {
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
        <motion.div initial="initial" animate="in" exit="out" variants={PageVariants} transition={PageTransition} className="myhome d-flex flex-column  justify-content-center">
         <div className="row">
             <div className=" col-2 col-sm-4"></div>
             <div className="col-8 col-sm-5">
             <h1 className="text-white ">Hello!</h1>
             </div>
             <div className=" col-2 col-sm-3"></div>
         </div> <br></br>
         <div className="row">
             <div className="col-sm-3"></div>
             <div className="col-sm-6">
             <p className="text-white">
             My name is Edison Ngizwenayo, I'm graduate software engineer working remotely as well on site. Anyone with Mobile and Web application task to be accomplished, look no further here we serve you better!</p>
             </div>
             <div className="col-sm-3"></div> 
         </div>
         <div className=" d-flex justify-content-center">
           <a href="/about" style={{textTransform:"capitalize"}}><i className="fa fa-user pr-1"></i>Learn more about me</a>
             </div>
            </motion.div>
        )
    }

    export default Home
