import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter, LinkedIn, GitHub} from "@mui/icons-material";
import { Box } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
        p: 6,
      }}
    >
      
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={6}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Contact Me
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Email: krishksanghvi@gmail.com
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Phone: +1 (216) 598 6415
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Follow Me
            </Typography>
            <Link href="https://www.linkedin.com/in/krishsanghvi/" color="inherit" target="_blank" rel="noopener">
              <LinkedIn />
            </Link>
            <Link
              href="https://www.instagram.com/krishksanghvi/"
              color="inherit"
              sx={{ pl: 1, pr: 1 }}
              target="_blank"
              rel="noopener"
            >
              <Instagram />
            </Link>
            <Link href="https://github.com/krishsanghvi/" color="inherit" target="_blank" rel="noopener">
              <GitHub />
            </Link>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body2" color="text.secondary" align="center">
            {"Copyright © Krish Sanghvi"}
            
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}