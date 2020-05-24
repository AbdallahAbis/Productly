import React from "react"

import {
  MarketingStrategiesContainer,
  Title,
} from "../../styles/sections/marketingStrategies.styles"
import BlogPost from "../blogPost"

const MarketingStrategies = ({ data }) => (
  <MarketingStrategiesContainer>
    <Title>Marketing Strategies</Title>
    <p>
      Join 40,000+ other marketers and get proven strategies on email marketing
    </p>
    <BlogPost data={data} />
  </MarketingStrategiesContainer>
)

export default MarketingStrategies
