
//import './Experience.css';
import * as React from "react";
import Typed from "react-typed";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Typography from "@mui/material/Typography";
import ProfilePicture from '../media/2022 LinkedIn Picture.jpeg'



function Experience() {
  return (
    
    <div className="app-background">
        
      
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <div style={{ display: 'flex', alignItems: 'center', height: '100%', justifyContent: 'center' }}>
            <div style={{ padding: '20px' }}> {/* Adjust padding as needed */}
              <Typography variant='h2' align='center' gutterBottom>
                TESTING
              </Typography>
              <Typography variant='h3' align='center' style={{ margin: '10px 0' }}>
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
            </div>
          </div>
        </Grid>
        
    
      </Grid>
      


    </div>
  );
}

export default Experience;
