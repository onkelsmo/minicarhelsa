import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import { Container } from '@components/global';
import { Link } from "gatsby"
// import ExternalLink from '@common/ExternalLink';

// import GithubIcon from '@static/icons/github.svg';
// import InstagramIcon from '@static/icons/instagram.svg';
// import TwitterIcon from '@static/icons/twitter.svg';

// const SOCIAL = [
//   {
//     icon: GithubIcon,
//     link: 'https://github.com/ajayns/gatsby-absurd',
//   },
//   {
//     icon: InstagramIcon,
//     link: 'https://instagram.com/ajay_ns',
//   },
//   {
//     icon: TwitterIcon,
//     link: 'https://twitter.com/ajayns08',
//   },
// ];

const Footer = () => (
  <StaticQuery
    query={graphql`
      query {
        art_pot: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "customers_pot" }
        ) {
          childImageSharp {
            fluid(maxWidth: 960) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <React.Fragment>
        <FooterWrapper>
          <StyledContainer>
            <Copyright>
              <h2>Minicar Helsa</h2>
              <span>
                Copyright &copy; {' '}
                {new Date().getFullYear().toString()}
                {' | '}
                <Link to="/imprint">Impressum</Link>
              </span>
            </Copyright>
            {/*<SocialIcons>*/}
            {/*  {SOCIAL.map(({ icon, link }) => (*/}
            {/*    <ExternalLink key={link} href={link}>*/}
            {/*      <img src={icon} alt="link" />*/}
            {/*    </ExternalLink>*/}
            {/*  ))}*/}
            {/*</SocialIcons>*/}
          </StyledContainer>
        </FooterWrapper>
      </React.Fragment>
    )}
  />
);

// const SocialIcons = styled.div`
//   display: flex;
//
//   img {
//     margin: 0 8px;
//     width: 24px;
//     height: 24px;
//   }
//
//   @media (max-width: ${props => props.theme.screen.sm}) {
//     margin-top: 40px;
//   }
// `;

const FooterWrapper = styled.footer`
  background-color: ${props => props.theme.color.primary};
  padding: 32px 0;
`;

const Copyright = styled.div`
  //font-family: ${props => props.theme.font.secondary};
  ${props => props.theme.font_size.small};
  color: ${props => props.theme.color.black.regular};

  a {
    text-decoration: none;
    color: inherit;
  }
`;

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${props => props.theme.screen.sm}) {
    flex-direction: column;
    text-align: center;
  }
`;

export default Footer;
