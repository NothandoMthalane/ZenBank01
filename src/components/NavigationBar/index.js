import React from 'react'
import {FaBars} from 'react-icons/fa';
import { Nav,
         NavContainer,
         NavLeft,
         NavLogo,
         NavCenter,
         NavMenu,
         NavLinks,
         NavRight,
         MobileIcon} from './NavbarElements'

export const Navbar = ({toggle}) => {
  return (
    
    <Nav>
        <NavContainer>
            <NavLeft>
              <NavLogo to='home'>
                  ZenBank
              </NavLogo>
            </NavLeft>
            <NavCenter>
              <NavMenu>
                    <NavLinks to='about'>About</NavLinks>
                    <NavLinks to='services'>Services</NavLinks>
                    <NavLinks to='access'>Access</NavLinks>
                    <NavLinks to='contact'>Contact</NavLinks>
              </NavMenu>
            </NavCenter>
            <NavRight>
              <MobileIcon onClick={toggle}>
                  <FaBars />
              </MobileIcon>
            </NavRight>
        </NavContainer>
    </Nav>
  )
}

export default Navbar