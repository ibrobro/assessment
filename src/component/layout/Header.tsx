import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import logo from "../../logo.svg";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Drawer from "@mui/material/Drawer";
import MENUS from "../../data/menu";
import Stack from "@mui/material/Stack";


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
        <Toolbar sx={{display: 'flex'}}>
          <Box sx={{display: {xs: 'block', md: 'none'}}}><MobileMenu /></Box>    
          <Logo />
          <SiteBrand />
          <Box sx={{display: {xs: 'none', md: 'block', flexGrow: 1}}}><DesktopMenu /></Box>
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
      sx={{mr: 1}}
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


/**
 * Desktop Menu
 */
 function DesktopMenu() {
  return (
    <Stack direction='row' sx={{
      '& .MuiTypography-root': {
        color: 'secondary.main',
        textTransform: 'capitalize',
        px: 1
      }
    }}>
      <Button>
        <Typography variant='h6' component={'h2'}>Home</Typography>
      </Button>
      <Button>
        <Typography variant='h6' component={'h2'}>Find Something</Typography>
      </Button>
    </Stack>
  )
 }


/**
 * Mobile Devices Menu (sm, xs)
 * @returns 
 */
function MobileMenu() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMobileOpen = () => {
    setMobileOpen(!mobileOpen);
  }

  const drawerWidth = 240;

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {MENUS.map((menu, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <menu.icon/>
              </ListItemIcon>
              <ListItemText primary={menu.title} />
            </ListItemButton>
            <Divider />
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container = window !== undefined ? () => window.document.body : undefined;
  
  return (
    <IconButton
      color="inherit"
      aria-label="open drawer"
      edge="start"
      onClick={toggleMobileOpen}
      sx={{ mr: 2, display: { md: 'none' } }}
    >
      <MenuIcon />
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={toggleMobileOpen}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
      >
        {drawer}
      </Drawer>
    </IconButton>
  );
}
