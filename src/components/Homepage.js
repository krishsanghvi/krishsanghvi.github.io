
import './Homepage.css';
import * as React from "react";
import Typed from "react-typed";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Typography from "@mui/material/Typography";
import ProfilePicture from '../media/2022 LinkedIn Picture.jpeg'
import { motion } from "framer-motion"


function Homepage() {
  return (
    
    <div className="app-background">
        
      
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <div style={{ display: 'flex', alignItems: 'center', height: '100%', justifyContent: 'center' }}>
            <motion.div animate={{ scale: 1 }} initial={{scale: .6}} transition={{ type: "spring"}} whileHover={{type: "spring", scale: 1.04}} style={{ padding: '20px' }}> {/* Adjust padding as needed */}
              <Typography variant='h2' align='center' gutterBottom>
                Hi, I'm Krish Sanghvi, and I'm a ...
              </Typography>
              <Typography variant='h2' align='center' style={{ margin: '10px 0' }}>
                <span className="text-slider-items"></span>
                <strong className="text-slider">
                  <Typed
                    strings={[
                      "College Student",
                      "Computer Science Major",
                      "Lifelong Learner"
                    ]}
                    typeSpeed={80}
                    backDelay={1100}
                    backSpeed={30}
                    loop
                  />
                </strong>
              </Typography>
            </motion.div>
          </div>
        </Grid>
        
        <Grid item xs={12} md={6}>
          
          <motion.div animate={{ scale: 1 }} initial={{scale: .6}} transition={{ type: "spring"}} whileHover={{type: "spring", scale: 1.04}} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            <img src={ProfilePicture} alt="Profile Picture" className="rounded-corners" style={{ maxWidth: '100%', height: 'auto' }}/>
          </motion.div>
          
        </Grid>
        {/* <Grid item xs={12} md={8}>
        <div style={{ display: 'flex', alignItems: 'center', height: '100%', justifyContent: 'center' }}>
          <Typography variant='body' align='center' gutterBottom>
          My name is Krish Sanghvi, and I am currently a Computer Science and Engineering major and Math minor at The Ohio State University. I am passionate about programming and robotics and am interested in learning more about AI and machine learning. I am a member of AI Club and Competitive Coding Club, and have participated in numerous Hackathons. For fun, I love playing sports such as basketball, tennis, table tennis, volleyball, and pickleball.
          </Typography>
          
          
          </div>
        </Grid> */}
      </Grid>
      
      
      


    </div>
  );
}

export default Homepage;
