import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/Contacts/operations';
import {
  ContactItem,
  Info,
  Name,
  Phone,
  DeleteBtn,
} from 'components/Contact/Contact.styled';

export const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    <ContactItem key={id}>
      <Info>
        <Name>{name}:</Name>
        <Phone>{number}</Phone>
      </Info>
      <DeleteBtn type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete
      </DeleteBtn>
    </ContactItem>
  );
};
