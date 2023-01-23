import { Helmet } from 'react-helmet';
import { LoginForm } from 'components/LoginForm/LoginForm';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import RegistrationImage from '../images/registration.jpeg';

export default function Login() {
  return (
    <>
      <Helmet>
        <title>Login</title>
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
            //       boxShadow={
            //   'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px'
            // },
          }}
        >
          <Box
        
            position="absolute"
            sx={{
              top: '20%',
              left: '35%',
              width: '450px',
            }}
          >
            <LoginForm />
          </Box>
        </Box>
      </Container>
    </>
  );
}
