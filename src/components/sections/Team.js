import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Section, Container } from '@components/global';

const TEAM = [
  {
    name: 'Angelika Marr',
    image: 'Angelika.jpg',
    role: 'Geschäftsführerin, Fahrerin',
  },
  {
    name: 'Thomas Marr',
    image: 'Thomas.jpg',
    role: 'Betriebsleiter, Fahrer',
  },
  {
    name: 'Detlef Hylsky',
    image: 'Detlef.jpg',
    role: 'Fahrer',
  },
  {
    name: 'Markus Krüger',
    image: 'Male-generic-image.png',
    role: 'Fahrer',
  }
];

const CARS = [
  {
    name: 'ta3888',
    image: 'ta3888.jpg'
  },
  {
    name: 'ta4888',
    image: 'ta4888.jpg'
  },
  {
    name: 'ta5888',
    image: 'ta5888.jpg'
  },
  {
    name: 'ta6888',
    image: 'ta6888.jpg'
  }
]

const Team = () => (
  <StaticQuery
    query={graphql`
      query {
        allFile(filter: { sourceInstanceName: { eq: "team" } }) {
          edges {
            node {
              relativePath
              childImageSharp {
                fluid(maxWidth: 400, maxHeight: 400) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <Section id="das team" accent="secondary">
        <Container style={{ position: 'relative' }}>
          <h1>Das Team</h1>
          <TeamGrid>
            {TEAM.map(({ name, image, role }) => {
              const img = data.allFile.edges.find(
                ({ node }) => node.relativePath === image
              ).node;

              return (
                <div key={name}>
                  <Img fluid={img.childImageSharp.fluid} alt={name} />
                  <Title>{name}</Title>
                  <Subtitle>{role}</Subtitle>
                </div>
              );
            })}
          </TeamGrid>
          <br />
          <br />
          <h1>Die Flotte</h1>
          <TeamGrid>
            {CARS.map(({ name, image }) => {
              let node = null

              data.allFile.edges.map(item => {
                if (item.node.relativePath === image) {
                  node = item.node
                }
                return null
              })
              return (
                <div key={name}>
                  {node !== null &&
                    <Img fluid={node.childImageSharp.fluid} alt={name} />
                  }
                  {/*<Title>{name}</Title>*/}
                </div>
              );
            })}
          </TeamGrid>
        </Container>
      </Section>
    )}
  />
);

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: 280px 280px;
  grid-template-rows: min-content;
  grid-gap: 50px;
  justify-content: space-between;
  width: 60%;
  margin-top: 72px;

  @media (max-width: ${props => props.theme.screen.lg}) {
    justify-content: start;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    width: 100%;
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  }

  @media (max-width: ${props => props.theme.screen.xs}) {
    grid-gap: 24px;
  }
`;

const Title = styled.p`
  margin-top: 16px;
  color: ${props => props.theme.color.black.regular};
`;

const Subtitle = styled.p`
  ${props => props.theme.font_size.small};
  color: ${props => props.theme.color.black.light};
`;

export default Team;
