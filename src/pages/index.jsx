import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/sections/hero"
import WhatWeDo from "../components/sections/WhatWeDo"
import EffortlessValidation from "../components/sections/effortlessValidation"
import ProductManagers from "../components/sections/productManagers"
import Marketers from "../components/sections/marketers"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <WhatWeDo />
    <EffortlessValidation />
    <ProductManagers />
    <Marketers />
  </Layout>
)

export default IndexPage
