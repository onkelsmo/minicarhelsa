import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Section, Container } from '@components/global';
import TelLink from '../common/TelLink';

const About = () => (
  <StaticQuery
    query={graphql`
      query {
        art_belingo_side_open: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "belingo_side_open" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        art_belingo_back_open: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "belingo_back_open" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        art_cars_group: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "cars_group" }
        ) {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <Section id="über uns" accent="secondary">
        <Container>
          <Grid>
            <Text>
              Das Minicar an Ihrer Seite - Familienbetrieb seit mehr als 20 Jahren!
              <br />
              Rufen Sie doch einfach an!
            </Text>
            <StyledTelLink tel="05605923162">
              05605 92 31 62
            </StyledTelLink>
          </Grid>
          <Grid>
            <div>
              <h2>Unsere Dienstleistungen:</h2>
              <UL>
                <li>Minicar</li>
                <li>Arztbesuche</li>
                <li>Rehamaßnahmen</li>
                <li>Kuraufenthalt</li>
                <li>Einkaufsfahrten</li>
                <li>Flughafentransfer</li>
                <li>Dialyse</li>
                <li>Chemotherapie</li>
                <li>Strahlentherapie</li>
                <li>Rollstuhlfahrten</li>
                <li>Express</li>
                <li>Kurierfahrten</li>
              </UL>
              <p>
                In Verbindung mit allen Krankenkassen!
                <br />
                Auch für Firmen: bei Arbeitsunfällen
              </p>
              <br />
              <p>
                Sie haben den Transportschein,<br />
                wir kümmern uns um den Rest.<br />
                Alle Krankenkassen werden akzeptiert.<br />
              </p>
            </div>
            <Art>
              <Img fluid={data.art_belingo_side_open.childImageSharp.fluid} />
              <br />
              <Img fluid={data.art_belingo_back_open.childImageSharp.fluid} />
            </Art>
          </Grid>
            <BreakerImg>
              <Img fluid={data.art_cars_group.childImageSharp.fluid} />
            </BreakerImg>
        </Container>
      </Section>
    )}
  />
);

const Grid = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-gap: 40px;
  text-align: right;
  align-items: center;
  justify-items: center;
  margin: 24px 0;

  ${props =>
    props.inverse &&
    `
    text-align: left;
    grid-template-columns: 2fr 3fr;
  `}

  h2 {
    margin-bottom: 16px;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    text-align: left;
    margin-bottom: 96px;

    &:last-child {
      margin-bottom: 24px;
    }

    ${props =>
      props.inverse &&
      `
        ${Art} {
          order: 2;
        }
    `}
  }
`;

const Art = styled.figure`
  margin: 0;
  max-width: 760px;
  width: 100%;
`;

const BreakerImg = styled.div`
  margin: 0;
  //max-width: 760px;
  width: 100%;
`;

const Text = styled.div`
  color: black;
  font-weight: bold;
  justify-self: end;
  ${props => props.theme.font_size.smaller};
  
  @media (max-width: ${props => props.theme.screen.md}) {
    justify-self: start;
  }
`;

const UL = styled.ul`
    font-size: 24px;
    line-height: 32px;
    color: #564F62;
`

const StyledTelLink = styled(TelLink)`
  color: ${props => props.theme.color.secondary};
  text-decoration: none;
  text-shadow: 2px 2px black;
  font-size: 60px;
  font-weight: bolder;

  &:hover {
    color: ${props => props.theme.color.secondary_light};
  }
`;

export default About;
