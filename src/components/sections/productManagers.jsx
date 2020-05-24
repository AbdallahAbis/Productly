import React from "react"

import ManagersSvg from "../../images/managers.inline.svg"

import {
  ProductManagersContainer,
  Correct,
} from "../../styles/sections/productManagers.styles"

const ProductManagers = () => (
  <ProductManagersContainer>
    <ManagersSvg />
    <div>
      <p> Easier decision making for</p>
      <h2>Product Managers</h2>
      <p>
        The Myspace page defines the individual, his or her characteristics,
        traits, personal choices and the overall personality of the person.{" "}
      </p>
      <Correct>Never worry about overpaying for your energy again. </Correct>
      <Correct>
        We will only switch you to energy companies that we trust and will treat
        you right
      </Correct>
      <Correct>
        We track the markets daily and know where the savings are.
      </Correct>
    </div>
  </ProductManagersContainer>
)

export default ProductManagers
