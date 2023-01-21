import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
// import { Paper } from '@mui/material';
// import CssBaseline from '@mui/material/CssBaseline';

import Container from '@mui/material/Container';
import { Suspense } from 'react';
import Header from 'components/Header/Header';

export const Layout = () => {
  return (
    <Container maxWidth="lg">
      <Header />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </Container>
  );
};
