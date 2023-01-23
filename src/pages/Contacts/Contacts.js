import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, Container } from '@mui/material';

import ContactsList from 'components/ContactsList/ContactsList';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import { fetchContacts } from 'redux/Contacts/operations';
import { getIsLoading } from 'redux/Contacts/selectors';
import BackgroundImage from '../../images/sepia-plasterboard-texture.jpg';
export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box
          position="relative"
          sx={{
            margin: '0 auto',
            backgroundImage: `url(${BackgroundImage})`,
            minHeight: '100vh',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <ContactForm />
            <div>{isLoading && 'Request in progress...'}</div>
            <Filter />
            <ContactsList />
          </Box>
        </Box>
      </Container>
    </>
  );
}
