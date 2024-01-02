
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
  "Code For Good":{description: "Description for Code for Good" },
  "OSU Course Catalog":{description: "Description for OSU Course Catalog"},
  "Personal Website":{description: "Built personal website to display skills, projects, and experiences in a professional React web application. Used GitHub Pages to host website for free."},
  "S":{description: "Description for OSU Course Catalog"},
  "OSU Course Catalog":{description: "Description for OSU Course Catalog"}
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
