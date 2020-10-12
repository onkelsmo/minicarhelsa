import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import backgroundImg from '../../images/art/belingo.jpg';

const Header = () => (
  <StaticQuery
    query={graphql`
      query {
        art_white_car: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "white_car" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1400) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={() => (
      <HeaderWrapper id="start" />
    )}
  />
);

const HeaderWrapper = styled.header`
  background-color: ${props => props.theme.color.primary};
  background-position: 15% 20%;
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
