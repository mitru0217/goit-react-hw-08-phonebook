import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { purple } from '@mui/material/colors';

export const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  '&:hover': {
    backgroundColor: purple[700],
  },
}));
