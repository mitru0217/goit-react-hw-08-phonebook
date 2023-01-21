import * as React from 'react';
import { useLocation } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import HomeImage from '../images/phone-1500x1125.jpeg';

export default function Home() {
  const location = useLocation();
  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box
          sx={{
            margin: '0 auto',
            backgroundImage:
              location.pathname === '/contacts'
                ? 'linear-gradient(#C9D6FF,#E2E2E2)'
                : `url(${HomeImage})`,
            minHeight: '100vh',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
        />
      </Container>
    </>
  );
}
