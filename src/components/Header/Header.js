import * as React from 'react';
import { AppBar, Box, Toolbar, Typography, Container } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from 'hooks/useAuth';
import { BgHeader } from '../../base/colors';

export default function Header() {
  const { isLoggedIn } = useAuth();
  return (
    <Container maxWidth="lg">
      <ThemeProvider theme={BgHeader}>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar backgroundcolor="primary.main" position="static">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <Navigation />
              </Typography>

              {isLoggedIn ? (
                <>
                  <UserMenu />
                </>
              ) : (
                <AuthNav />
              )}
            </Toolbar>
          </AppBar>
        </Box>
      </ThemeProvider>
    </Container>
  );
}
