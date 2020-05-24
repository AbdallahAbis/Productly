import React from "react"
import { StaticQuery, graphql } from "gatsby"
import CustomButton from "../customButton"

import {
  WeDoContainer,
  Title,
  ServicesContainer,
  Card,
  Icon,
  CardTitle,
  CardInfo,
  Background,
} from "../../styles/sections/whatWeDo.styles"

const WhatWeDo = () => (
  <StaticQuery
    query={graphql`
      {
        services: allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/services/" } }
          sort: { fields: frontmatter___id }
        ) {
          edges {
            node {
              frontmatter {
                info
                title
                color
                icon {
                  publicURL
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <WeDoContainer>
        <Background />
        <Title>
          We design tools to unveil <br /> your superpowers
        </Title>

        <ServicesContainer>
          {data.services.edges.map(
            (
              {
                node: {
                  frontmatter: { title, info, color, icon },
                },
              },
              i
            ) => (
              <Card key={i}>
                {
                  <Icon color={color}>
                    <img src={icon.publicURL} alt="" />
                  </Icon>
                }
                <CardTitle>{title}</CardTitle>
                <CardInfo>{info}</CardInfo>
              </Card>
            )
          )}
        </ServicesContainer>
        <CustomButton>SIGN UP NOW</CustomButton>
      </WeDoContainer>
    )}
  />
)

export default WhatWeDo
