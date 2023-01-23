import { useDispatch } from 'react-redux';
import { logOut } from 'redux/Auth/operations';
import { useAuth } from 'hooks/useAuth';
import { Button, Typography, Box } from '@mui/material';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: '300px',
      }}
    >
      <Typography variant="h6" sx={{ color: 'primary.main' }} fontWeight="700">
        Welcome, {user.name}
      </Typography>
      <Button
        size="small"
        type="button"
        variant="contained"
        onClick={() => dispatch(logOut())}
      >
        Log out
      </Button>
    </Box>
  );
};
