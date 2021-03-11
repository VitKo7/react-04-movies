import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { HeaderContainer } from './HeaderStyled';

class Header extends Component {
  state = {
    movies: [],
  };

  render() {
    return (
      <HeaderContainer>
        <div>
          <NavLink
            exact
            to="/"
            className="navLink"
            activeClassName="activeNavLink"
          >
            Home
          </NavLink>

          <NavLink
            to="/search"
            className="navLink"
            activeClassName="activeNavLink"
          >
            Search
          </NavLink>
        </div>
      </HeaderContainer>
    );
  }
}

export default Header;
