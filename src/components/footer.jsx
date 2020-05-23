import React from "react"

import Logo from "./logo"
import CustomButton from "./customButton"
import CustomInput from "./customInput"

import { FooterContainer, StyledLink } from "../styles/footer.styles"

const Footer = () => (
  <FooterContainer>
    <Logo />
    <div>
      <h3>Quick Links</h3>
      <StyledLink to="#">About Us</StyledLink>
      <StyledLink to="#">Blog</StyledLink>
      <StyledLink to="#">Contact</StyledLink>
      <StyledLink to="#">FAQ</StyledLink>
    </div>
    <div>
      <h3>Legal Stuff</h3>
      <StyledLink to="#">Disclaimer</StyledLink>
      <StyledLink to="#">Financing</StyledLink>
      <StyledLink to="#">Privacy Policy</StyledLink>
      <StyledLink to="#">Terms of Service</StyledLink>
    </div>
    <div>
      <h3>Knowing you're always on the best energy deal.</h3>
      <CustomInput type="text" placeholder="Enter your phone number" />
      <CustomButton>Sign up Now</CustomButton>
    </div>
  </FooterContainer>
)

export default Footer
