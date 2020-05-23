import React from "react"

import { Input } from "../styles/customInput.styles"

const CustomInput = ({ type, placeholder, props }) => (
  <Input placeholder={placeholder} type={type} {...props} />
)

export default CustomInput
