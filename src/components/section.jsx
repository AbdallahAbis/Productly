import React from "react"

import {
  EffortlessValidationContainer,
  SubTitle,
} from "../styles/section.styles"

const SectionBoilerplate = ({
  firstParagraph,
  title,
  secondParagraph,
  thirdParagraph,
  fourthParagraph,
  fifthParagraph,
  subtitleOne,
  subTitleTwo,
  subtitleThree,
  children,
}) => (
  <EffortlessValidationContainer>
    <div>
      <p>{firstParagraph}</p>
      <h2>{title}</h2>
      <p>{secondParagraph}</p>
      <SubTitle>{subtitleOne}</SubTitle>
      <p>{thirdParagraph}</p>
      <SubTitle>{subTitleTwo}</SubTitle>
      <p>{fourthParagraph}</p>
      <SubTitle>{subtitleThree}</SubTitle>
      <p>{fifthParagraph}</p>
    </div>
    {children}
  </EffortlessValidationContainer>
)

export default SectionBoilerplate
