import styled from "styled-components";
import { Link as LinkS } from 'react-scroll'; //different page import

export const Button = styled(LinkS)`
  border-radius: 3rem;
  background: ${({primary}) => (primary ? '#fff' : '#01BF71')};
  white-space: nowrap;
  padding: ${({big}) => (big ? '1rem 3rem' : '.8rem 2rem')};
  color: ${({dark}) => (dark ? '#0106re06' : '#fff')};
  font-size: ${({fontBig}) => (fontBig ? '1.5rem' : '1rem')};
  outline: none;
  border: none;
  display:flex:
  justify-content: center;
  cursor: pointer;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover{
     transition: all 0.2s ease-in-out;
  }
`;
