import styled from "styled-components"
import { Link } from "gatsby"

export const BlogPostsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  grid-column-gap: 3rem;

  margin-top: 6rem;
`
export const Post = styled.div`
  width: 100%;

  img {
    width: 100%;
  }
`
export const PostInfoContainer = styled.div`
  display: flex;

  margin: 2rem 0 2rem 0;
`
export const Author = styled.h4`
  &::before {
    content: "By\\00a0";
    font-weight: 400;
  }
  &::after {
    content: "\\00a0|\\00a0";
    font-weight: 400;
  }
`
export const PostTitle = styled(Link)`
  font-size: 2.4rem;
  font-weight: 700;
  color: var(--color-dark);
`
