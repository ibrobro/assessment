import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import React from "react";

/**
 * Main Page Structure
 * Footer
 */
 export default function Footer() {
  return (
    <Box sx={{backgroundColor: 'grey', minHeight:'10vh'}}>
      <Container sx={{display: 'flex', justifyContent: 'center'}}>
        <Typography variant='h2' color='primary'>FOOTER</Typography>
      </Container>
    </Box>
  );
}