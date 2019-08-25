import React from 'react'
import styled from 'styled-components'
import { HamburgerMenu } from 'components/atoms/icons'

const NavBar = () => (
  <NavContainer>
    <Item gridArea="menu">
      <HamburgerMenu />
    </Item>
    <Item gridArea="logo">Familiar: Mythic Arena</Item>
  </NavContainer>
)

const NavContainer = styled.nav`
  /* display */
  display: grid;
  grid-template-areas: 'menu logo .';
  grid-template-columns: 50px 1fr 3em;

  /* box */
  -webkit-box-shadow: ${({ theme }) => theme.boxShadow};
  -moz-box-shadow: ${({ theme }) => theme.boxShadow};
  box-shadow: ${({ theme }) => theme.boxShadow};
  height: 70px;

  /* content */
  background-color: ${({ theme }) => theme.colors.white};
`

const Item = styled.div`
  grid-area: ${({ gridArea }) => gridArea};
  display: grid;
  justify-content: center;
  align-items: center;
`

export default NavBar
