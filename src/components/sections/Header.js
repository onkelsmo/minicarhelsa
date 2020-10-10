import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import backgroundImg from '../../images/art/white_car.jpg';
import { Container } from '@components/global';
import TelLink from '../common/TelLink';

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
      <HeaderWrapper id="start">
        <Container>
          <Grid>
            <Text>
                <StyledTelLink tel="05605923162">
                  (0 56 05) 92 31 62
                </StyledTelLink>
            </Text>
          </Grid>
        </Container>
      </HeaderWrapper>
    )}
  />
);

const HeaderWrapper = styled.header`
  background-color: ${props => props.theme.color.primary};
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${backgroundImg});
  height: 700px;
  padding-top: 96px;

  @media (max-width: ${props => props.theme.screen.md}) {
    padding-top: 128px;
  }
`;

const Art = styled.figure`
  width: 100%;
  margin: 0;

  > div {
    width: 100%;

    @media (max-width: ${props => props.theme.screen.md}) {
      width: 100%;
    }
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-gap: 64px;

  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    grid-gap: 80px;

    > ${Art} {
      order: 2;
    }
  }
`;

const Text = styled.div`
  background: rgba(0, 0, 0, .6);
  color: ${props => props.theme.color.secondary};
  justify-self: end;
  padding: 10px;
  border-radius: 20px;
  
  @media (max-width: ${props => props.theme.screen.md}) {
    justify-self: end;
  }
`;

const StyledTelLink = styled(TelLink)`
  color: ${props => props.theme.color.secondary};
  text-decoration: none;
  text-shadow: 2px 2px 4px rgba(255,255,255,1);
  font-size: 60px;
  font-weight: bolder;

  &:hover {
    color: ${props => props.theme.color.secondary_light};
  }
`;

export default Header;
