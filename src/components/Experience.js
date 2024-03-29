
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

import { motion } from "framer-motion"

import Project from "./Project";
import Skills from "./Skills";
import Timeline from "./Timeline"

const defaultTheme = createTheme();

export default function Experience() {
  return (
    
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
        
        <Skills/>
        <Project/>
        <Timeline/>
    </ThemeProvider>
  );
}