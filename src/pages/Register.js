import * as React from 'react';
// import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import RegistrationImage from '../images/registration.jpeg';

export default function Register() {
  // const location = useLocation();
  return (
    <>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box
          position="relative"
          sx={{
            margin: '0 auto',
            // backgroundImage:
            // location.pathname === '/contacts'
            //   ? 'linear-gradient(#C9D6FF,#E2E2E2)'
            //   : `url(${RegistrationImage})`,
            backgroundImage: `url(${RegistrationImage})`,
            minHeight: '100vh',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
        >
          <Box
            component="form"
            position="absolute"
            sx={{
              top: '20%',
              left: '35%',
              width: '450px',
            }}
          >
            <RegisterForm />
          </Box>
        </Box>
      </Container>
    </>
  );
}
