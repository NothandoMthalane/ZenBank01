import styled from 'styled-components'
import { Link as LinkS } from 'react-scroll'; 

export const Container = styled.div`
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010606;
`

export const ContactH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 2rem;
  align-items: center;
  text-align: center;

  @media screen and (max-width: 480px){
      font-size: 2rem;
  }
`;

export const ContactForm = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`

export const InputBox = styled.div`
  flex: 1 1 41rem;
  height: 8rem;
  width: 100%;
`

export const ContactDetail = styled.span`
  display: block;
  margin-bottom: .6rem;
  font-size: 1.5rem;
  color: #fff;
`

export const ContactInput = styled.input`
  
display: block;
width: 70%;
padding: 1.2rem 1.4rem;
border: .2rem solid black;
border-radius: .5rem;
font-size: 1.5rem;
color: #000;
background: #fff;
`

export const BankOptions = styled.select`
  display: block;
  width: 70%;
  padding: 1.2rem 1.4rem;
  border: .2rem solid black;
  border-radius: .5rem;
  font-size: 1.5rem;
  color: #000;
  background: #fff;
`

export const Option = styled.option``;

export const Btn = styled(LinkS)`
border-radius: 3rem;
background: ${({primary}) => (primary ? '#fff' : '#01BF71')};
white-space: nowrap;
padding: ${({big}) => (big ? '1rem 3rem' : '.8rem 2rem')};
color: ${({dark}) => (dark ? '#010606' : '#fff')};
font-size: ${({fontBig}) => (fontBig ? '1.5rem' : '1rem')};
outline: none;
border: none;
display:flex:
justify-content: center;
cursor: pointer;
text-align: center;
width: 20%;
align-items: center;
transition: all 0.2s ease-in-out;

&:hover{
   transition: all 0.2s ease-in-out;
}
`;