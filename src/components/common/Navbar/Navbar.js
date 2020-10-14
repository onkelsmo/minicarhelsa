import React, { Component } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Scrollspy from 'react-scrollspy';

import { Link } from "gatsby"
import { Container } from '@components/global';
import {
  Nav,
  NavItem,
  Brand,
  StyledContainer,
  NavListWrapper,
  MobileMenu,
  Mobile,
  Sublemental
} from './style';

import { ReactComponent as MenuIcon } from '@static/icons/menu.svg';

const NAV_ITEMS = ['Über uns', 'Das Team', 'FAQ'];

class Navbar extends Component {
  state = {
    mobileMenuOpen: false,
  };

  toggleMobileMenu = () => {
    this.setState(prevState => ({ mobileMenuOpen: !prevState.mobileMenuOpen }));
  };

  closeMobileMenu = () => {
    if (this.state.mobileMenuOpen) {
      this.setState({ mobileMenuOpen: false });
    }
  };

  getNavAnchorLink = (item) => (
    <AnchorLink offset='100' href={`#${item.toLowerCase()}`} onClick={this.closeMobileMenu}>
      {item}
    </AnchorLink>
  )

  getNavList = ({ mobile = false }) => (
    <NavListWrapper mobile={mobile}>
      <Scrollspy
        items={NAV_ITEMS.map(item => item.toLowerCase())}
        currentClassName="active"
        mobile={mobile}
        offset={-64}
      >
        {NAV_ITEMS.map(navItem => (
          <NavItem key={navItem}>{this.getNavAnchorLink(navItem)}</NavItem>
        ))}
      </Scrollspy>
    </NavListWrapper>
  );

  render() {
    const { mobileMenuOpen } = this.state;

    return (
      <Nav {...this.props}>
        <StyledContainer>
          <Brand>
            {this.props.origin === 'imprint' &&
              <Link to={'/'}>Minicar Helsa</Link>
            }
            {this.props.origin !== 'imprint' &&
              <AnchorLink href={`#start`} onClick={this.closeMobileMenu}>
                Minicar Helsa
              </AnchorLink>
            }
            <br />
            <Sublemental>Freundlich - Seriös - Sicher - Zuverlässig - Pünktlich</Sublemental>
          </Brand>
          {this.props.origin !== 'imprint' &&
            <Mobile>
              <button onClick={this.toggleMobileMenu} style={{ color: 'black' }}>
                <MenuIcon />
              </button>
            </Mobile>
          }

          {this.props.origin !== 'imprint' &&
            <Mobile hide>{this.getNavList({})}</Mobile>
          }
        </StyledContainer>
        {this.props.origin !== 'imprint' &&
          <Mobile>
            {mobileMenuOpen && (
              <MobileMenu>
                <Container>{this.getNavList({ mobile: true })}</Container>
              </MobileMenu>
            )}
          </Mobile>
        }
      </Nav>
    );
  }
}

export default Navbar;
