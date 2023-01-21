import { Box } from '@mui/material';
import { StyledLink } from 'base/Styled/StyledLink';
import { AppRegistration, Login } from '@mui/icons-material';

export const AuthNav = () => {
  return (
    <Box
      component="div"
      sx={{
        display: 'flex',
      }}
    >
      <StyledLink to="/register">
        <AppRegistration />
        Register
      </StyledLink>
      <StyledLink to="/login">
        <Login />
        Log In
      </StyledLink>
    </Box>
  );
};
