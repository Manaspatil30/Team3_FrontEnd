import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box } from "@mui/material";

const Footer = () => {
    return (
        <Box
          component="footer"
          sx={{
            backgroundColor:'#edf3fd',
            p: 6,
          }}
        >
          <Container maxWidth="lg">
            <Grid container spacing={5}>
              <Grid item xs={12} sm={4} sx={{textAlign:'center'}}>
                <Typography variant="h6" color="text.primary" gutterBottom>
                  About Us
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  We are Unikart, a grocery website built for students.
                </Typography>
              </Grid>
              <Grid item xs={12} sm={4} sx={{textAlign:'center'}}>
                <Typography variant="h6" color="text.primary" gutterBottom>
                  Contact Us
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  City Centre, Birmingham, UK
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Email: 190074368@aston.ac.uk
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Phone: +1 234 567 8901
                </Typography>
              </Grid>
              <Grid item xs={12} sm={4} sx={{textAlign:'center'}}>
                <Typography variant="h6" color="text.primary" gutterBottom>
                  Follow Us
                </Typography>
                <Box sx={{display:'flex', justifyContent:'space-evenly'}} mt={3}>
                <Link href="https://www.facebook.com/" color="inherit">
                  <Facebook />
                </Link>
                <Link
                  href="https://www.instagram.com/"
                  color="inherit"
                  sx={{ pl: 1, pr: 1 }}
                >
                  <Instagram />
                </Link>
                <Link href="https://www.twitter.com/" color="inherit">
                  <Twitter />
                </Link>
                </Box>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Typography variant="body2" color="text.secondary" align="center" mt={7}> 
                {"Copyright © "}
                <Link color="inherit" href="https://your-website.com/">
                  Your Website
                </Link>{""}
                {new Date().getFullYear()}
                {"."}
              </Typography>
            </Box>
          </Container>
        </Box>
      );
}

export default Footer