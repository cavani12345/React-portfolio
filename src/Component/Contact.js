import React from 'react'
import {motion} from "framer-motion";
import './contact.css';

const Contact = () => {
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
        className="mycontact">
            <div className="row myabout d-flex flex-column justify-content-center">
            <div className="col-sm-3"></div> 
            <div className="col-sm-6">
               <p><h1 className="d-flex justify-content-center pl-5 text-white">Contact</h1></p> 
                </div> 
            <div className="col-sm-3"></div> 
            </div> <br></br>
            <div className="row offset-sm-3">
            <div className="card text-center">
  <div className="card-header">
  <h1 className="card-title">Contact Address</h1>
  </div>
  <div className="card-body">
  <h5 className="card-title">Use the below address so as to get more information about me</h5><br></br><br></br>
    <p><i className="fa fa-envelope pr-2"></i> <b> edisonwacavan2015@gmail.com</b></p>
    <p><i className="fa fa-phone"></i> <b> +250785279543 / +250735937270</b></p>
    <p><i className="fa fa-map-marker pr-2"></i> <b> Kigali, Rwanda</b></p>
  </div>
</div>

</div>    
</motion.div>
    )
}

export default Contact
