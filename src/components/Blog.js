
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
import Paper from '@mui/material/Paper';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import MacAndCheese from "../media/Food Reviews/Mac&Cheese.jpg"

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const foodReview = {
  imageUrl: MacAndCheese,
  title: 'Wisconsin Mac & Cheese from Noodles World Kitchen',
  content: "A beautiful blend of cheddar and jack and cream sauce to create a fantastic choice for ala carte. Definitely grater than your midnight microwavable Mac & Cheese. And the cheddar is sharper than your boyfriend's jawline. You'll have to do some curls after eating this. It's not Gouda, it's grate! Overall, a solid 8/10! Sorry, I didn't want these puns to be too cheesy!"
};

const sentences = foodReview.content.split('. ').filter(sentence => sentence);

// TODO remove, this demo shouldn't need to reset the theme.
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
              Food Reviews
            </Typography>
          </Container>
        </Box>
        <Box p={4}>
      <Paper elevation={3}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <img 
              src={foodReview.imageUrl} 
              alt={foodReview.title} 
              style={{ width: '100%', height: 'auto' }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Box p={2}>
              <Typography align="center" variant="h5" gutterBottom>
                {foodReview.title}
              </Typography>
              {sentences.map((sentence, index) => (
                <Typography align="center" key={index} variant="body1" style={{ marginBottom: '0.5rem' }}>
                  {sentence.trim()}.{index < sentences.length - 1 && <br />}
                </Typography>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Box>
      </main>
      
      {/* End footer */}
    </ThemeProvider>
  );
}