import React from "react";
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Box from "@mui/material/Box";
import CheckIcon from '@mui/icons-material/Check';
import Stack from "@mui/material/Stack";


export default function RegisterOk() {
  return(
    <Box sx={{display: 'flex', justifyContent: 'center'}}>
      <Card sx={{width: {xs: '80vw'}, backgroundColor: 'info.main', p: 2}}>
        <Stack direction='row' sx={{display:'flex',alignItems: 'center'}}>
          <CheckIcon fontSize='large' color='primary' sx={{mr: 1}} />
          <Typography variant='h6' component={'h2'} color='secondary.main'>Register Success!</Typography>
        </Stack>
      </Card>
    </Box>
  );
}