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
import { styled } from '@mui/material/styles';
import { purple } from '@mui/material/colors';

export const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  const handleClickShowPassword = () => setShowPassword(show => !show);

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700],
    },
  }));

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <Box
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
          border: '1px solid black',
          padding: '8px',
          display: 'flex',
          flexDirection: 'column',
          alignIitems: 'center',
        }}
        autoComplete="off"
      >
        <Typography variant="h2" marginBottom={2}>
          Log In
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
          <Email sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
          <TextField
            id="input-with-sx"
            label="Email"
            variant="standard"
            type="email"
            name="email"
          />
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
          <Password sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
          <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
            <InputLabel htmlFor="standard-adornment-password">
              Password
            </InputLabel>
            <Input
              id="standard-adornment-password"
              type={showPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
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
        <ColorButton type="submit" variant="contained">
          Custom CSS
        </ColorButton>
      </Box>
    </form>
  );
};
