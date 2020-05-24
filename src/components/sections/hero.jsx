import React from "react"

import Happy from "../../images/happy.inline.svg"

import PlayButton from "../playButton"

import {
  HeroContainer,
  Title,
  Paragraph,
  Buttons,
  Play,
} from "../../styles/sections/hero.styles"
import CustomButton from "../customButton"

const Hero = () => (
  <HeroContainer>
    <div>
      <Title>The Design Thinking superpowers</Title>
      <Paragraph>
        Tools, tutorials, design and innovation experts, all in one place! The
        most intuitive way to imagine your next user experience.
      </Paragraph>
      <Buttons>
        <CustomButton>Get started</CustomButton>
        <Play>
          <PlayButton /> Watch the video
        </Play>
      </Buttons>
    </div>
    <Happy />
  </HeroContainer>
)

export default Hero
