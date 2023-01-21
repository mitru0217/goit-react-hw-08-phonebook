import { useAuth } from 'hooks/useAuth';

import HomeIcon from '@mui/icons-material/Home';
import { StyledLink } from 'base/Styled/StyledLink';
// import { IconButton } from '@mui/material';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <StyledLink to="/">
        <HomeIcon />
        Home
      </StyledLink>
      {isLoggedIn && <StyledLink to="/contacts">Contacts</StyledLink>}
    </nav>
  );
};
