
import './Homepage.css';
import * as React from "react";
import Typed from "react-typed";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Typography from "@mui/material/Typography";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Container from '@mui/material/Container';



import { motion } from "framer-motion"


const acord = {
  "Code For Good - Goodwill Columbus": {
    description: "Developed a comprehensive system featuring user authentication, a dynamic course calendar, and a newsletter. Implemented secure password hashing and storage. Integrated a mentorship database, an intelligent chatbot, and an admin dashboard for real-time interactions and FAQs. Enabled Twilio push notifications, web page analytics, and event planning functionalities."
  },
  "OSU Course Catalog": {
    description: "Enhanced the OSU Course Catalog system to provide an intuitive and user-friendly interface for course exploration and selection. Implemented advanced search capabilities and interactive course details."
  },
  "Personal Website": {
    description: "Designed and built a professional personal website showcasing my skills, projects, and experiences. Developed using React and hosted on GitHub Pages, the site demonstrates my proficiency in modern web development."
  },
  "Pinball Game": {
    description: "Programmed an engaging Pinball Game in C, integrating 2D motion physics, interactive graphics, and efficient input/output file handling for a seamless gaming experience."
  },
  "FEH Robot": {
    description: "Engineered an autonomous robot using C++, designed to navigate and complete tasks on a challenging multifaceted course. The project showcased my skills in robotics and autonomous systems."
  },
  "To-Do List with Database": {
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
      {Object.entries(acord).map(([name, { description }]) => (
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>{name}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            { description }
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
        
      </Container>
    </div>
  );
}

export default Project;
