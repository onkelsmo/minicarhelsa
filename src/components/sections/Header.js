import React from 'react';
import styled from 'styled-components';
import backgroundImg from '../../images/art/cars_header.jpg';

const Header = () => (
  <HeaderWrapper id="start" />
);

const HeaderWrapper = styled.header`
  background-color: ${props => props.theme.color.primary};
  background-position: 40% 20%;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${backgroundImg});
  height: 700px;
  padding-top: 96px;

  @media (max-width: ${props => props.theme.screen.md}) {
    padding-top: 128px;
  }
`;

export default Header;
