import React from "react"

import { Button } from "../styles/customButton.styles"

const CustomButton = ({ children, ...props }) => (
  <Button to="#" {...props}>
    {children}
  </Button>
)

export default CustomButton
