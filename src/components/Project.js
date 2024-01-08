
import './Homepage.css';
import * as React from "react";
import Typed from "react-typed";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Container from '@mui/material/Container';
import {GitHub} from "@mui/icons-material";
import LinkIcon from '@mui/icons-material/Link';



import CodeForGoodPDF from "../media/Project/Code for Good 2023 - Goodwill Columbus_ Team 3.pdf"
import TodoList from "../media/Project/TodoList.png"
import CFGImage from "../media/Project/CFGImage.png"
import OSUCourseCatalog from "../media/Project/OSU_Course_Catalog.png"
import Pinball from "../media/Project/Pinball.png"
import FEHRobot from "../media/Project/FEH_Robot.jpg"



import { motion } from "framer-motion"


const acord = {
  "Code For Good - Goodwill Columbus": {
    image: CFGImage,
    link: CodeForGoodPDF,
    description: "Developed a comprehensive webapp using the MERN stack helping the Columbus Goodwill Foundation streamline communication, connections, and information sharing. Implemented secure password hashing and storage. Integrated a mentorship database, an intelligent chatbot, and an admin dashboard for real-time interactions and FAQs. Enabled Twilio push notifications, web page analytics, and event planning functionalities."
  }, 
  "OSU Course Catalog": {
    image: OSUCourseCatalog,
    description: "Enhanced the OSU Course Catalog system to provide an intuitive and user-friendly interface for course exploration and selection. Implemented advanced search capabilities and interactive course details."
  },
  "Personal Website": {
    description: "Designed and built a professional personal website showcasing my skills, projects, and experiences. Developed using React and hosted on GitHub Pages, the site demonstrates my proficiency in modern web development.",
    github: "https://github.com/krishsanghvi/krishsanghvi.github.io"
  },
  "Pinball Game": {
    image: Pinball,
    description: "Programmed an engaging Pinball Game in C, integrating 2D motion physics, interactive graphics, and efficient input/output file handling for a seamless gaming experience."
  },
  "FEH Robot": {
    image: FEHRobot,
    link: "https://u.osu.edu/feh22c5/",
    description: "Engineered an autonomous robot using C++, designed to navigate and complete tasks on a challenging multifaceted course. The project showcased my skills in robotics and autonomous systems."
  },
  "To-Do List with Database": {
    image: TodoList,
    github: "https://github.com/krishsanghvi/todolistwithdatabase",
    description: "Created a full-featured web application for task management. Features include adding, editing, and deleting tasks, with automatic categorization and data persistence. Developed with a focus on user experience and data integrity."
  }
}


function Project() {
  return (
    <div>
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
              Projects
            </Typography>
          </Container>
        </Box>
        <Container maxWidth="md">
      <Grid container spacing={4}> {/* Added container and spacing */}
        {Object.entries(acord).map(([name, { image, link, github, description }]) => (
          <Grid item key={name} xs={12} sm={6} md={4}>
            <motion.div animate={{ scale: 1 }} initial={{ scale: 0.8 }} transition={{ type: "spring" }} whileHover={{ type: "spring", scale: 1.04 }}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h5" component="h2" gutterBottom>
                    {name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {description}
                  </Typography>
                  {image && (
                    <CardMedia
                    component="img"
                    sx={{
                      height: 200, // Adjust height as needed
                      width: '100%', // Use 100% width for better responsiveness
                      objectFit: 'contain' // Ensures the entire image fits inside the container
                    }}
                    image={image}
                    alt={name}
                  />
                  )}
                  {link && (                
                    <Link href={link} color="inherit" target="_blank" rel="noopener noreferrer">
                      <LinkIcon />
                    </Link>         
                  )}
                  {github && (
                    <Link href={github} color="inherit" target="_blank" rel="noopener noreferrer" style={{ marginLeft: link ? '10px' : '0' }}>
                      <GitHub />
                    </Link>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
    </div>
  );
}

export default Project;
