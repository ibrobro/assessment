import React, {ChangeEvent, useEffect, useState} from 'react';
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
  validateUsZipCode,
  validateEmail,
  validateStateCode,
  isEmpty,
} from '../../lib/StringValidation';
import { 
  ALPHA_NUMERIC_SPACE_REGEX, 
  ALPHA_NUMERIC_DASH_APOST_REGEX,
  NUMERIC_REGEX,
  EMAIL_REGEX
} from '../../data/reg-constants';
import { isSetAccessorDeclaration } from 'typescript';


/**
 * FORM ERROR INITAL STATE
 */
const FORM_ERRRORS_INIT: {[id: string]: boolean} = {
  zipCode: false,
  email: false,
  firstName: false,
  state: false,
}


/**
 * INITAL FORM VALUES
 */
const FORM_VALUE_INIT: {[id: string]: string} = {
  firstName: '',
  lastName: '',
  email: '',
  zipCode: '',
  state: '',
};


/**
 * Register Contact Page
 * @returns 
 */
export default function RegisterPage() {
  const navigate = useNavigate();
  // If form submission success, redirect to "OK" page
  const [redirect, setRedirect] = useState(false);
  // Objects that record form errors if any
  const [formErrors, setFormErrors] = useState({...FORM_ERRRORS_INIT});
  // form values
  const [formValues, setFormValues] = useState({...FORM_VALUE_INIT});
  // If true submit the from
  const [readyToSubmit, setReadyToSubmit] = useState(false);

  // Text Input Changes Handling
  const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    const newFormErrors = {...formErrors};
    const newFormValues = {...formValues};

    if(name==='email') {
      newFormErrors['email'] = !validateEmail(value); 
    } else if(name==='zipCode') {
      newFormErrors['zipCode'] = !validateUsZipCode(value);
    } else if(name==='firstName') {
      newFormErrors['firstName'] = isEmpty(value);
    }
    
    newFormValues[name] = value;
    
    setFormValues(newFormValues);
    setFormErrors(newFormErrors);
  }

  // Select input Changes Handling
  const handleSelectChange = (e: SelectChangeEvent) => {
    const {name, value} = e.target;
    const newFormErrors = {...formErrors};
    const newFormValues = {...formValues};

    if(name==='state') {
      newFormErrors['state'] = !validateStateCode(value);
    }

    newFormValues[name] = value;
    
    setFormValues(newFormValues);
    setFormErrors(newFormErrors);
  };

  // LAST CHECK BEFORE SUBMIT
  const formDoubleCheck =() => {
    const newFormErrors = {...formErrors};

    newFormErrors['firstName'] = isEmpty(formValues['firstName']);
    newFormErrors['email'] = !validateEmail(formValues['email']);
    newFormErrors['zipCode'] = !validateUsZipCode(formValues['zipCode']);
    newFormErrors['state'] = !validateStateCode(formValues['state']);
    
    setFormErrors(newFormErrors);
    setReadyToSubmit(!Object.values(newFormErrors).includes(true));
  }

  const handleSubmit = () => {
    formDoubleCheck();

  }

  // Redirect after good form submission
  useEffect(() => {
    if(redirect) {
      navigate(MENUS.registerOk.link);
    }
  })

  // SUBMIT IF FORM Clear and Ready
  useEffect(() => {
    if(readyToSubmit) {
      setRedirect(true);
    }
    return (() => setReadyToSubmit(false));
  }, [readyToSubmit]);

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
            name='firstName'
            placeholder='ex: John'
            value={formValues.firstName}
            fullWidth
            error={formErrors['firstName']}
            onChange={handleTextChange}
            onKeyDown={e => {
              if(!ALPHA_NUMERIC_SPACE_REGEX.test(e.key)){
                e.preventDefault();
              }
            }}
          />
          <TextField 
            label='Last Name'
            name='lastName'
            placeholder='ex: Appleseed, O"reilly, mac-arthur'
            value={formValues.lastName}
            fullWidth
            onChange={handleTextChange}
            onKeyDown={e => {
              if(!ALPHA_NUMERIC_DASH_APOST_REGEX.test(e.key)){
                e.preventDefault();
              }
            }}
          />
          <TextField 
            label='Email'
            name='email'
            value={formValues.email}
            placeholder='ex: john@doe.com'
            fullWidth
            onChange={handleTextChange}
            error={formErrors['email']}
          />
          <TextField 
            label='Zip Code'
            name='zipCode'
            placeholder='Zip Code'
            value={formValues.zipCode}
            fullWidth
            error={formErrors['zipCode']}
            inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
            onChange={handleTextChange}
          />
          <InputLabel id="demo-select-small">State</InputLabel>
          <Select
            labelId="demo-select-small"
            id="demo-select-small"
            name='state'
            value={formValues.state}
            label='State'
            error={formErrors['state']}
            onChange={handleSelectChange}
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