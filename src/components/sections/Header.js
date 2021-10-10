import React from 'react';
import styled from 'styled-components';
import backgroundImg from '../../images/art/cars_header.jpg';

const Header = () => (
  <HeaderWrapper id='start'>
    <JobOffer>
      <JobOfferText>
        <White>Wir suchen</White>
        <br /> Minicar Fahrer / in
        <br />
        <White>
          auf 450€
          <br />
          Minijob
          <br />
          Meldet euch unter
        </White>
        <br />
        05605 92&nbsp;31&nbsp;62
      </JobOfferText>
    </JobOffer>
  </HeaderWrapper>
);

const White = styled.span`
  color: white;
  text-shadow: none;
  ${props => props.theme.font_size.regular};
  text-transform: none;
`;

const JobOfferText = styled.div`
  font-family: ${props => props.theme.font.primary};
  font-weight: bolder;
  text-shadow: 1px 1px white;
  ${props => props.theme.font_size.xlarge};
  color: ${props => props.theme.color.secondary};
  text-transform: uppercase;
`;

const JobOffer = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: relative;
  top: 50px;
  width: fit-content;
  padding: 0 25px;
  border: 2px solid black;
  @media (min-width: ${props => props.theme.screen.xs}) {
    left: 70px;
  }

  @media (min-width: ${props => props.theme.screen.sm}) {
    left: 80px;
  }

  @media (min-width: ${props => props.theme.screen.md}) {
    left: 100px;
  }

  @media (min-width: ${props => props.theme.screen.lg}) {
    left: 100px;
  }

  ${props =>
    props.fluid &&
    `
    left: 200px !important;
  `};
`;

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
