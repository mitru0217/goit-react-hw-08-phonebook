import styled from 'styled-components';

export const ContactItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 25px;
  padding-top: 8px;
  padding-bottom: 32px;
`;
export const Info = styled.div`
  display: flex;
  min-width: 350px;
  justify-content: space-between;

  /* align-content: space-between; */
`;
export const Name = styled.p`
  display: inline-block;
  font-size: 25px;
`;
export const Phone = styled.p`
  display: inline-block;
  font-size: 25px;
  padding-right: 32px;
`;
export const DeleteBtn = styled.button`
  width: 100px;
  height: 30px;
  margin-left: 15px;
  border: none;
  border-radius: 5px;
  background-color: rgb(184, 201, 201);
  cursor: pointer;
  :hover {
    color: red;
    background-color: aliceblue;
  }
`;
