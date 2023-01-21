import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  color: #212121;
  :hover {
    color: #00796b;
    text-decoration: underline;
  }
  :active {
    color: #ef5350;
  }
  /* :visited {
    color: #ef5350;
    text-decoration: underline;
  } */
`;
