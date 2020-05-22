import React from "react"

import { Button } from "../styles/customButton.styles"

const CustomButton = ({ notPrimary, children }) => (
  <Button notPrimary={notPrimary}>{children}</Button>
)

export default CustomButton
