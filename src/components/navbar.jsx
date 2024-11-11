import React from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em 2em;
  background-color: #fff;
  position: sticky;
  top: 0;
  z-index: 1000;
  margin: 0;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImage = styled.img`
  margin-right: 0.5em;
  width: 40px;
  height: 40px;
`;

const Title = styled.h1`
  font-size: 1.5em;
  font-weight: bold;
`;

const ProText = styled.span`
  color: black;
`;

const ActiveText = styled.span`
  color: #008CFF;
`;

const LoginButton = styled.a`
  padding: 0.5em 1.5em;
  border: 2px solid #008CFF;
  border-radius: 5px;
  background-color: transparent;
  color: #008CFF;
  cursor: pointer;
  font-size: 1em;
  white-space: nowrap;
  text-decoration: none;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #008CFF;
    color: #fff;
  }
`;

function Navbar() {
  return (
    <NavbarContainer>
      <LogoContainer>
        <LogoImage src="/assets/logo/logo biru.svg" alt="Logo" />
        <Title>
          <ProText>Pro</ProText>
          <ActiveText>Active</ActiveText>
        </Title>
      </LogoContainer>
      {/*page login taroh sini*/}
      <LoginButton href="/login">Login</LoginButton>
    </NavbarContainer>
  );
}

export default Navbar;
