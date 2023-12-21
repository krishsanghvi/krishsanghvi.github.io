
import './Homepage.css';
import * as React from "react";
import Typed from "react-typed";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from "@mui/material/Typography";



function Homepage() {
  return (
    <div id="home" className="intro route bg-image background">
        
        <div class='anim_gradient'></div>
        <Stack>
          <Typography variant='h2' align='center' gutterBottom>Hi, I am Krish Sanghvi</Typography>
          {/* <h1 className="intro-title mb-4" text-align="center"></h1> */}
          <Typography variant='h3' align='center'>
          {/* <p className="intro-subtitle" text-align="center"> */}
            <span className="text-slider-items"></span>
            <strong className="text-slider" >
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
          {/* </p> */}
          </Typography>
               
        </Stack>
      </div>
  );
}

export default Homepage;
