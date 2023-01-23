import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/Auth/operations';
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
  Email,
  Visibility,
  VisibilityOff,
  Password,
} from '@mui/icons-material';

import { LogForm } from './LoginForm.styled';

export const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

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
      logIn({
        email: email,
        password: password,
      })
    );
  };

  return (
    <LogForm onSubmit={handleSubmit}>
      <Typography variant="h2" marginBottom={2} sx={{ color: 'primary.main' }}>
        Log In
      </Typography>
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
          sx={{ m: 1, width: '25ch',color: 'primary.main',  }}
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
    </LogForm>
  );
};
