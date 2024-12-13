
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
import Minestrone_Soup from "../media/Food Reviews/Minestrone_Soup.jpg"
import Brassica from "../media/Food Reviews/Brassica.jpg"
import Samosa from "../media/Food Reviews/Samosa.jpeg"
import Zorch from "../media/Food Reviews/Zorch Pizza.jpg"



const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const foodReviews = {
  "Upside Down Pizza from Zorch Pizza in Richmond, VA": { 
    image: Zorch,
    content: "This review is on a knead-to-know basis. Zorch Pizza in Richmond has got pizza by the slice, and 2 is more than enough to suffice. The Cheese pizza is great, yet the Upside Down pizza is worth the wait. The latter will make your pizza expectations shatter. The sauce is creamy and the crust is thin. No way your face cannot have a grin. Only a weirdough won't like these pizzas. Overall, a splendid 9.5/10! If you're not enjoying these pizza puns, you must be laughtose intolerant."
  },
  "Wisconsin Mac & Cheese from Noodles World Kitchen": { 
    image: MacAndCheese,
    content: "A beautiful blend of cheddar and jack and cream sauce to create a fantastic choice for ala carte. Definitely grater than your midnight microwavable Mac & Cheese. And the cheddar is sharper than your boyfriend's jawline. You'll have to do some curls after eating this. It's not Gouda, it's grate! Overall, a solid 8/10! Sorry, I didn't want these puns to be too cheesy!"
  },
  "Mom's Magnificent Minestrone Soup": {
    image: Minestrone_Soup, 
    content: "A savory broth brewed with onions, carrots, zucchini, tomatoes, green beans, kidney beans, and shelled pasta, topped with a sprinkle of mozzarella cheese. It absouplutely destroys Olive Garden's version by a soup-slide, making it a soup-pendous choice! It's my soup-er star! This soup takes my broth away! 10/10! "
  },
  "Falafel Sandwich from Brassica": {
    image: Brassica, 
    content: "Delicious Falafel, pickled veggies, and feta cheese loaded in pulchritudinous pita bread! The color of this dish definitely popped as each element brought in a unique texture and flavor. The falafel was perfectly constructed: a brown crumble on the outside and green squishiness on the inside. And make sure you don't overload your sandwich with too much because it will be harder to cram into your head that studying last minute for your midterm exam! Overall, a beautiful 9/10!"
  },
  "Suits and Saris Samosas": {
    image: Samosa, 
    content: "Delicately wrapped fried pastries filled with spiced potatos and peas. Perfectly paired with a side of green chutney. Fabulous finger food for an exquisite evening. Don't have a sari to match your suit, don't feel bad. We have the chutney for your samosa. Never say no to a samosa, they have fillings too."
  }
};

const splitIntoSentences = (content) => {
  const sentenceRegex = /(?<=[.?!])\s/;
  return content.split(sentenceRegex).filter(sentence => sentence);
};
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
        <Container>
          <Box py={4}>
            {Object.entries(foodReviews).map(([name, { image, content }], index) => (
              <Paper square={false} elevation={4} sx={{ mb: 4, overflow: 'hidden' }} key={index}>
                <Grid container spacing={2}>

                  <Grid item xs={12} sm={6}>
                    <img 
                      src={image} 
                      alt={name} 
                      style={{ width: '100%', height: 'auto', display: 'block', marginLeft: 'auto', marginRight: 'auto' }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Box p={2}>
                      <Typography align="center" variant="h5" gutterBottom sx={{ marginBottom: 2 }}>
                        {name}
                      </Typography>
                      {splitIntoSentences(content).map((sentence, sentenceIndex) => (
                      <Typography align="center" key={sentenceIndex} variant="body1" sx={{ marginBottom: 2 }}>
                        {sentence.trim()}
                      </Typography>
                      ))}
                     
                    </Box>
                  </Grid>
                </Grid>
              </Paper>
            ))}
          </Box>
        </Container>
      </main>
    </ThemeProvider>
  );
}