import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import {
  ContactItem,
  Info,
  Name,
  Phone,
  DeleteBtn,
} from 'components/Contact/Contact.styled';

export const Contact = ({ id, name, phone }) => {
  const dispatch = useDispatch();
  return (
    <ContactItem key={id}>
      <Info>
        <Name>{name}:</Name>
        <Phone>{phone}</Phone>
      </Info>
      <DeleteBtn type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete
      </DeleteBtn>
    </ContactItem>
  );
};
