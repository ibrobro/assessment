import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import logo from "../../logo.svg";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

/*******************************************************************************
 * MAIN COMPONENT
 ******************************************************************************/

/**
 * Header
 * Main Page Structure
 */
export default function Header() {
  return (
    <AppBar color="primary">
      <Container>
        <Toolbar>
          <MobileMenu />    
          <Logo />
          <SiteBrand />
        </Toolbar>
      </Container>
    </AppBar>
  )
}



/*******************************************************************************
 * SUPPORTIVE COMPONENTS
 ******************************************************************************/

/**
 * Site Brand Component
 * @returns 
 */
function SiteBrand() {
  return (  
    <Typography 
      textTransform='capitalize' 
      variant='h5' 
      component='h1'
      color='secondary'
    >
      Assessment
    </Typography>
  )
}


/**
 * Site Logo
 * @returns 
 */
function Logo() {
  return(
    <Box
      component="img"
      sx={{
        height: 50,
        width:50,
        maxHeight: { xs: 50, md: 50 },
        maxWidth: { xs: 50, md: 50 },
      }}
      alt="The house from the offer."
      src={logo}
    />
  )
}


function MobileMenu() {
  return (
    <IconButton
      color="inherit"
      aria-label="open drawer"
      edge="start"
      sx={{ mr: 2, display: { md: 'none' } }}
    >
      <MenuIcon />
    </IconButton>
  );
}