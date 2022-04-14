import styled from 'styled-components'
import { Link as LinkS } from 'react-scroll'; //different page import

export const Nav = styled.div`
  background: #000;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 5;
  
  @media screen and (max-width: 960px) {
      transition: 0.4s all ease;
  }
`

export const NavContainer =  styled.div`
  display:flex;
  justify-content: space-between;
  height: 5rem;
  z-index: 1;
  width: 100%;
  padding: 0 1.5rem;
  max-width: 1200px;
`

export const NavLeft = styled.div`
  flex: 1;
  display: flex;
`

export const NavLogo = styled(LinkS)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 2rem;
  display: flex;
  align-items: center;
  margin-left: 1.5rem;
  font-weight: bold;
  text-decoration: none;
`

export const NavCenter = styled.div`
flex: 1;
display: flex;
`

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -1.3rem;
  height: 5rem;

  @media screen and (max-width: 768px) {
      display: none;
  }
`

export const NavLinks = styled(LinkS)`
  color: #fff;
  display: flex;
  font-size: 1.3rem;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-transform: capitalize;

  &:active{
      border-bottom: 3px solid #01bf71;
  }
`

export const NavRight = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

export const MobileIcon = styled.div`
display:none;

@media screen and (max-width: 760px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
}
`