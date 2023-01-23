import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/Auth/operations';
import {
  Box,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Input,
  IconButton,
  InputAdornment,
  Button,
} from '@mui/material';

import {
  Person,
  Email,
  Visibility,
  VisibilityOff,
  Password,
} from '@mui/icons-material';

import { RegForm } from './RegisterForm.styled';

export const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleClickShowPassword = () => setShowPassword(show => !show);

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(
      register({
        name: name,
        email: email,
        password: password,
      })
    );
    // const reset = () => {
    //   setName('');
    //   setEmail('');
    //   setPassword(' ');
    // };
  };

  return (
    <RegForm onSubmit={handleSubmit}>
      <Typography variant="h2" sx={{ color: 'primary.main' }} marginBottom={2}>
        Registration
      </Typography>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'flex-end',
          width: '280px',
          marginBottom: '8px',
        }}
      >
        <Person sx={{ color: '#1976d2', mr: 1, my: 0.5 }} />
        <TextField
          id="name"
          label="Username"
          variant="standard"
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          sx={{ m: 1, width: '25ch' }}
        />
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'flex-end',
          width: '280px',
          marginBottom: '8px',
        }}
      >
        <Email sx={{ color: '#1976d2', mr: 1, my: 0.5 }} />
        <TextField
          id="email"
          label="Email"
          variant="standard"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          sx={{ m: 1, width: '25ch' }}
        />
      </Box>

      <Box
        sx={{ display: 'flex', alignItems: 'flex-end', marginBottom: '8px' }}
      >
        <Password sx={{ color: '#1976d2', mr: 1, my: 0.5 }} />
        <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
          <InputLabel htmlFor="standard-adornment-password">
            Password
          </InputLabel>
          <Input
            id="standard-adornment-password"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={e => setPassword(e.target.value)}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  sx={{ color: '#1976d2', mr: 1, my: 0.5 }}
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      </Box>
      <Button type="submit" variant="contained">
        Signup
      </Button>
    </RegForm>
  );
};
