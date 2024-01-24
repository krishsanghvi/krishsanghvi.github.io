
//import './Experience.css';
import * as React from "react";
import { Chrono } from "react-chrono";
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

import { motion } from "framer-motion"

import Strongsville from "../media/Timeline/Strongsville_High_School_logo.jpg"
import OSU from "../media/Timeline/OSU.png"
import Raasinthe614 from "../media/Timeline/Raas_in_the_614.jpg"
import DiscoveryLab from "../media/Timeline/Discovery_Lab.jpg"
import Snapon from "../media/Timeline/Snap-onSBS_Logo-01.png"
import STEMstangs from "../media/Timeline/STEMstangs.jpg"

import Project from "./Project";
import Skills from "./Skills";

//Highschool, OSU, Snapon, FTC, Raas in the 614, 
  const items = [{
    title: "August 2017 - May 2021",
    cardTitle: "Strongsville High School",
    url: "https://shs.strongnet.org/",
    cardSubtitle:"Honor Roll, Top 5% GPA, 14 Rigorous AP classes",
    cardDetailedText: "Activities and societies: FIRST Tech Challenge (FTC) Robotics Team Lead, Mock Trial Attorney and Witness, President of Spanish Honors Society, Member of National Honors Society, Optimist Oratorical and Essay Contest 2nd Place Winner, Weekly Volunteer at Kemper House (Alzheimer Care facility)",
    media: {
      type: "IMAGE",
      source: {
        url: Strongsville
      }
    }
    },
    {
      title: "July 2017 - ",
      cardTitle: "FTC Robotics Team STEMstangs",
      url: "https://home.stemstangs.com/",
      cardSubtitle:"Lead Developer, Team Leader, and Coach",
      cardDetailedText: "Spearheaded the design and development of a Java-based robot as part of a collaborative team, successfully progressing to the state level of competition and receiving recognition as a Dean's List Semifinalist. Founded and established the 501(c)(3) nonprofit organization STEMstangs, dedicated to promoting STEM education and engagement within the community. Meticulously documented a Strategic Business Plan, Succession Plan, and Budget/Expense Plan, ensuring comprehensive records within our Engineering Notebook. Orchestrated various community service and outreach events, including food and book drives, fostering meaningful connections with local initiatives and positively impacting the community.",
      media: {
        type: "IMAGE",
        source: {
          url: STEMstangs
        }
      }
      },
    {
      title: "June 2021 - August 2021",
      cardTitle: "Summer at Discovery's Edge",
      url: "https://www.discoverylabglobal.com/undergraduate-1",
      cardSubtitle:"Discovery Lab Global Intern",
      cardDetailedText: "Collaboratively authored comprehensive technical documentation spanning over 100 pages, detailing the content of a cybersecurity textbook and documenting the progress of our team. Acquired fundamental cybersecurity skills while honing professional abilities in email communication, meeting summaries, and effective team collaboration. Assisted and learned from the esteemed Dr. Rob Williams, a renowned DARPA program manager and recipient of the National Engineer of the Year award.",
      media: {
        type: "IMAGE",
        source: {
          url: DiscoveryLab
        }
      }
      },
    {
      title: "August 2021 - ",
      cardTitle: "The Ohio State University",
      url: "https://cse.osu.edu/",
      cardSubtitle:"Major: Honors Computer Science and Engineering; Minor: Mathematics",
      cardDetailedText: "Activities and societies: AI Club, Competitive Coding Code, Dancer and Treasurer of OSU's Raas Dance Team, Director of Raas in the 614",   
      media: {
        type: "IMAGE",
        source: {
          url: OSU
        }
      }
      },
      {
        title: "May 2022 - June 2023",
        cardTitle: "Raas in the 614",
        url: "https://www.youtube.com/channel/UCiWlWeBpqoQyJzGWT-OO-Zg",
        cardSubtitle: "Director of an intercollegiate Garba-Raas competition held in Columbus, Ohio.",
        cardDetailedText: "Orchestrated the seamless execution of a multifaceted series of weekend events, uniting over 200 participants from across the US in Columbus, Ohio, while successfully raising $5,000+ for charity.\n"
        +"Led and facilitated weekly meetings, effectively assigning responsibilities to eight subcommittees encompassing finance, philanthropy, and registration.\n"
        +"Leveraged MS Excel to meticulously organize extensive attendee datasets, oversee budget and expenses, and efficiently manage the competition's financial aspects.\n"
        +"Developed and maintained the competition's Weebly website and Square ticketing platform, strategically reaching out to a broad audience of 1000+ individuals to promote the event.",   
        media: {
          type: "IMAGE",
          source: {
            url: Raasinthe614
          }
        }
        },
        {
          title: "December 2022 - ",
          cardTitle: "Snap-on Business Solutions",
          url: "https://sbs.snapon.com/",
          cardSubtitle: "Information Technology Intern and Web Systems Intern",
          cardDetailedText: "Contributed to efficient daily automated code and data deployment across multiple servers through Ansible, improving deployment speed and reliability. Utilized Opsview, Grafana, and Splunk for proactive monitoring and troubleshooting, ensuring optimal system performance and reliability. Conducted data cleaning of a database comprising 20,000+ dealerships and franchises, enhancing data integrity and accuracy. Efficiently imaged 100+ PCs within a week using KACE, optimizing workflow and minimizing downtime. Successfully resolved 200+ software and hardware JIRA tickets related to computers, monitors, and printers, ensuring seamless operation for end-users. Implemented a systematic organization system for computer hardware in the storage room, improving accessibility and inventory management.",   
          media: {
            type: "IMAGE",
            source: {
              url: Snapon
            }
          }
          },
];

const reversedItems = [...items].reverse();


const defaultTheme = createTheme();

export default function Timeline() {
  return (
    
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
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
              Timeline
            </Typography>
          </Container>
        </Box>
        <div style={{ 
  display: 'flex', 
  justifyContent: 'center', 
  alignItems: 'center', 
  //height: '100vh', // take up the full viewport height
  width: '100vw'  // take up the full viewport width
}}>
  <div style={{ width: '1000px', height: '950px' }}>
    <Chrono items={reversedItems} mode="VERTICAL_ALTERNATING" />
  </div>
</div>

    </ThemeProvider>
  );
}