import { View } from 'react-native';
import React from 'react';
import styled from 'styled-components';
import LogoHorizontal from '../../assets/logo-horizontal.svg';

const HeaderContainer = styled.View`
  background-color: ${props => props.theme.colors.dark};
  padding: 24px 12px;
  padding-top: 60px;
  justify-content: space-between;
  flex-direction: row;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <View style={{ flex: 1 }} />
      <LogoHorizontal height={40} width={100} />
      <View style={{ flex: 1 }} />
    </HeaderContainer>
  );
};

export default Header;
