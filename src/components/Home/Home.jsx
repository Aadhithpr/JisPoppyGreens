import React from "react";
import './Home.css'
import {motion} from 'framer-motion'
const Home = () => {
  return (
    <div className="home" id="Home">
      <div className="left-h">
        <motion.div 
        initial={{ x: -100, opacity: 0 }} 
        whileInView={{ x: 100, opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
        className="title">
          <h1>Welcome To Ji's Poppy Greens</h1>
          <span>At Ji's Poppy Greens, we're proud to be a fresh face in the world of microgreen wholesale.</span><br />
          <span> Our journey began with a passion for health, sustainability, and the incredible potential of these tiny greens.</span><br />
          <span> As a budding startup, we're driven by innovation, quality, and a commitment to providing the finest microgreens to businesses and restaurants.</span>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
