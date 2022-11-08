import React, {useEffect, useState} from 'react';
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/system/Stack";
import InputLabel from "@mui/material/InputLabel";
import Select, {SelectChangeEvent} from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import US_STATES from '../../data/us-states';
import { useNavigate } from 'react-router-dom';
import MENUS from '../../data/menu';
import { 
  ALPHA_NUMERIC_REGEX, 
  ALPHA_NUMERIC_DASH_APOST_REGEX,
  NUMERIC_REGEX
} from '../../data/reg-constants';

/**
 * Register Contact Page
 * @returns 
 */
export default function RegisterPage() {
  const navigate = useNavigate();
  const [redirect, setRedirect] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [zip, setZip] = useState('');
  const [state, setState] = useState('');

  const handleStateChange = (e: SelectChangeEvent) => {
    setState(e.target.value);
  };

  const handleSubmit = () => {
    setRedirect(true);
  }

  // REDIRECT AFTER SUCCESS FORM SUBMIT
  useEffect(() => {
    if(redirect) {
      navigate(MENUS.registerOk.link);
    }
  })

  return(
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center'
      }}
    >
      <Paper 
        variant='outlined' 
        sx={{
          m: 1,
          width: {xs:'400px', sm: '600', md: '800px', },
          p: 1,
        }}
      >
        <Stack 
          direction='column'
          sx={{
            '& .MuiTextField-root': {
              pb: 1,
            },
          }}
        >
          <Typography variant='h2'>Contact</Typography>
          <TextField 
            label='First Name'
            placeholder='ex: John'
            fullWidth
            onKeyDown={e => {
              if(!ALPHA_NUMERIC_REGEX.test(e.key)){
                e.preventDefault();
              }
            }}
          />
          <TextField 
            label='Last Name'
            placeholder='ex: Appleseed, O"reilly, mac-arthur'
            fullWidth
            onKeyDown={e => {
              if(!ALPHA_NUMERIC_DASH_APOST_REGEX.test(e.key)){
                e.preventDefault();
              }
            }}
          />
          <TextField 
            label='Email'
            placeholder='ex: john@doe.com'
            fullWidth
          />
          <TextField 
            label='Zip Code'
            placeholder='Zip Code'
            fullWidth
            inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
          />
          <InputLabel id="demo-select-small">State</InputLabel>
          <Select
            labelId="demo-select-small"
            id="demo-select-small"
            value={state}
            label='State'
            onChange={handleStateChange}
            sx={{mb: 1}}
          >
            <MenuItem value=''><em>None</em></MenuItem>
            {Object.keys(US_STATES).map((m, k) => (
              <MenuItem key={k} value={m}>{US_STATES[m]}</MenuItem>
            ))}
          </Select>
          <Button onClick={handleSubmit} size='large' variant='outlined' sx={{alignSelf: 'flex-end'}}>Submit</Button>
        </Stack>
      </Paper>
    </Box>
  );
}