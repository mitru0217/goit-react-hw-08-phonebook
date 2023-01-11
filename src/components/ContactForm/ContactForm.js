import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from '../../redux/selectors';
import { addContact } from 'redux/operations';
import {
  ContactsForm,
  LabelInput,
  Thumb,
  Icon,
  ContactsInput,
  ContactsBtn,
} from 'components/ContactForm/ContactForm.styled';
import { BsFillPersonFill, BsFillTelephoneFill } from 'react-icons/bs';
// import { FaSearch } from 'react-icons/fa';
export default function ContactForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const contactNew = {
      name: name,
      phone: phone,
    };

    const findNameIndex = contacts.findIndex(
      contact => contact.name === contactNew.name
    );
    if (findNameIndex < 0) {
      dispatch(addContact(contactNew));
    } else {
      alert(`${contactNew.name} is already in contacts`);
    }
    reset();
  };
  const reset = () => {
    setName('');
    setPhone('');
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
            name="phone"
            value={phone}
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
