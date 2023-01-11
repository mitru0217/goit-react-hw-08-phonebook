import styled from 'styled-components';

export const ContactsForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  width: 400px;
  height: auto;
  margin-bottom: 30px;
  border: 1px solid teal;
  background: rgb(184, 201, 201);
`;
export const Thumb = styled.div`
display:flex;
height:25px;
margin-bottom:15px;
`
export const Icon = styled.div`
display:flex;
align-items: center;
height:27px;
width: 30px;
padding-left: 5px;
margin-top: 10px;

background-color:white;
`
export const ContactsInput = styled.input`
  width:170px;
  height: 25px;
  padding-left: 10px;
  margin: 0 auto;
  margin-top: 10px;
  outline: none;
  border: none;
`;
export const LabelInput = styled.label`
  width:174px;
  
`;

export const ContactsBtn = styled.button`
  width: 100px;
  height: 30px;
  margin: 0 auto;
  margin-top: 10px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  :hover {
    background-color: aliceblue;
  }
`;
