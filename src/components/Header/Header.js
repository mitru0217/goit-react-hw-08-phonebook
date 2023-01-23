import * as React from 'react';
import { AppBar, Box, Toolbar, Typography, Container } from '@mui/material';
// import { ThemeProvider } from '@mui/material/styles';
import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from 'hooks/useAuth';
// import { BgHeader } from '../../base/colors';
import BgHeader from '../../images/leather.jpeg';
export default function Header() {
  const { isLoggedIn } = useAuth();
  return (
    <Container maxWidth="lg">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          sx={{ backgroundImage: `url(${BgHeader})` }}
          position="static"
          display="flex"
        >
          <Toolbar>
            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
              }}
            >
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
    </Container>
  );
}
