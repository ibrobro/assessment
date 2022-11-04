import React from "react";
import Typography from '@mui/material/Typography';
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";


export default function FindSomething() {
  return(
    <Paper sx={{backgroundColor: 'info', p: 2}}>
      <Stack direction='row'>
        <Typography color='warning' variant='body1'>
          Just a test page for navigation testing purpose
        </Typography>
      </Stack>
    </Paper> 
  );
}