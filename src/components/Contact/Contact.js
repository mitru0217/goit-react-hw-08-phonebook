import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/Contacts/operations';
import {
  ContactItem,
  Info,
  Name,
  Phone,
} from 'components/Contact/Contact.styled';
import { Button } from '@mui/material';

export const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    <ContactItem key={id}>
      <Info>
        <Name>{name}:</Name>
        <Phone>{number}</Phone>
      </Info>
      <Button
        size="small"
        type="button"
        variant="contained"
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </Button>
    </ContactItem>
  );
};
