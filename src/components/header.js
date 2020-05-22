import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Logo from "./logo"
import CustomButton from "./customButton"

import {
  HeaderContainer,
  NavContainer,
  Options,
  Buttons,
} from "../styles/header.styles"

const Header = ({ siteTitle }) => (
  <HeaderContainer>
    <Logo style={{ flex: 1 }} />
    <NavContainer>
      <Options>
        <Link>Products</Link>
        <Link>Customers</Link>
        <Link>Pricing</Link>
        <Link>Resources</Link>
      </Options>
      <Buttons>
        <CustomButton notPrimary>Sign In</CustomButton>
        <CustomButton>Sign Up</CustomButton>
      </Buttons>
    </NavContainer>
  </HeaderContainer>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
