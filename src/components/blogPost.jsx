import React from "react"
import Img from "gatsby-image"

import {
  Post,
  BlogPostsContainer,
  PostInfoContainer,
  Author,
  PostTitle,
} from "../styles/blogPost.styles"

const BlogPost = ({ data: { posts } }) => (
  <BlogPostsContainer>
    {console.log(posts)}
    {posts.edges.map(post => {
      console.log(post)
      const {
        node: {
          frontmatter: {
            title,
            date,
            author,
            image: {
              childImageSharp: { fluid },
            },
          },
        },
      } = post

      return (
        <React.Fragment>
          <Post>
            <Img fluid={fluid} alt="" />
            <PostInfoContainer>
              <Author>{author}</Author>
              <p>{date}</p>
            </PostInfoContainer>
            <PostTitle>{title}</PostTitle>
          </Post>
        </React.Fragment>
      )
    })}
  </BlogPostsContainer>
)

export default BlogPost
