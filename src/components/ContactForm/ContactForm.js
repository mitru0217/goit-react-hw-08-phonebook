import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from '../../redux/Contacts/selectors';
import { addContact } from 'redux/Contacts/operations';
import {
  ContactsForm,
  LabelInput,
  Thumb,
  Icon,
  ContactsInput,
  ContactsBtn,
} from 'components/ContactForm/ContactForm.styled';
import {
  BsFillPersonFill,
  BsFillTelephoneFill,
  // BsPhoneLandscape,
} from 'react-icons/bs';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const { contacts } = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const contactNew = {
      name: name,
      number: number,
    };

    const findNameIndex = contacts.findIndex(
      contact => contact.name === contactNew.name
    );
    if (findNameIndex < 0) {
      dispatch(addContact(contactNew));
      toast.success(`${contactNew.name} added to contacts`, { duration: 500 });
    } else {
      toast.error(`${contactNew.name} is already in contacts`, {
        duration: 2000,
      });
    }
    reset();
  };
  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <ContactsForm onSubmit={handleSubmit}>
      <LabelInput>
        Name
        <Thumb>
          <Icon>
            <BsFillPersonFill size={20} />
          </Icon>
          <ContactsInput
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            placeholder="Enter your full name"
            onChange={handleChange}
          />
        </Thumb>
      </LabelInput>

      <LabelInput>
        Number
        <Thumb>
          <Icon>
            <BsFillTelephoneFill size={15} />
          </Icon>
          <ContactsInput
            className="ContactsInput"
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            placeholder="Enter your phone number"
            onChange={handleChange}
          />
        </Thumb>
      </LabelInput>

      <ContactsBtn type="submit" className="ContactsBtn">
        Add contact
      </ContactsBtn>
    </ContactsForm>
  );
}
