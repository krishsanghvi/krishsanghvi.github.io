
//import './Experience.css';
import * as React from "react";
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { LinearProgress } from '@mui/material';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Java from "../media/Logos/Java.svg"
import C from "../media/Logos/C.svg"
import MATLAB from "../media/Logos/MATLAB.svg"
import Python from "../media/Logos/Python.svg"
import Ruby from "../media/Logos/Ruby.svg"
import SQL from "../media/Logos/SQL.svg"
import AWS from "../media/Logos/AWS.svg"
import Ansible from "../media/Logos/Ansible.svg"
import Tomcat from "../media/Logos/Tomcat.svg"
import Apache from "../media/Logos/Apache.svg"
import ReactP from "../media/Logos/React.svg"

import { motion } from "framer-motion"

import Project from "./Project";

const cards = {
  "Java": { image: Java, proficiency: 80 },
  "C/C++": { image: C, proficiency: 80 },
  "MATLAB": { image: MATLAB, proficiency: 70 },
  "Ruby on Rails": { image: Ruby, proficiency: 60 },
  "SQL": { image: SQL, proficiency: 60 },
  "React": { image: ReactP, proficiency: 50 },
  "AWS": { image: AWS, proficiency: 40 },
  "Ansible": { image: Ansible, proficiency: 40 },
};


const defaultTheme = createTheme();

export default function Album() {
  return (
    
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Technical Skills
            </Typography>
          </Container>
        </Box>
        
        <Container maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {Object.entries(cards).map(([language, { image, proficiency }]) => (
              
              <Grid item key={language} xs={6} sm={4} md={3}>
                <motion.div animate={{ scale: 1 }} initial={{scale: .8}} transition={{ type: "spring"}} whileHover={{type: "spring", scale: 1.04}}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      height: '150px', // Adjust height as needed
                      width: '150px', // Adjust width as needed
                      // backgroundImage: 'url(https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg)',
                      // backgroundSize: 'contain', // Makes sure the entire image fits inside the container
                      // backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'center'// Centers the image within the container
                    }}
                    image={image}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {language}
                    </Typography>
                    <LinearProgress variant="determinate" value={proficiency} />
            <Typography variant="body2" color="text.secondary">
              {proficiency}%
            </Typography>
                  </CardContent>
                </Card>
                </motion.div>
              </Grid>
              
            ))}
          </Grid>
        </Container>

        
        
        <Project/>
       

      </main>
      
      
    </ThemeProvider>
  );
}