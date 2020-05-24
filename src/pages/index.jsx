import React from "react"

import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/sections/hero"
import WhatWeDo from "../components/sections/WhatWeDo"
import EffortlessValidation from "../components/sections/effortlessValidation"
import ProductManagers from "../components/sections/productManagers"
import Marketers from "../components/sections/marketers"
import MarketingStrategies from "../components/sections/marketingStrategies"

const IndexPage = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
      <WhatWeDo />
      <EffortlessValidation />
      <ProductManagers />
      <Marketers />
      <MarketingStrategies data={data} />
    </Layout>
  )
}

export const IndexQuery = graphql`
  query {
    posts: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/posts/" } }
    ) {
      edges {
        node {
          frontmatter {
            title
            date
            author
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`

export default IndexPage
