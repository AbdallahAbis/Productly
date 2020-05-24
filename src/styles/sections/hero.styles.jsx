import styled from "styled-components"
import { Link } from "gatsby"

export const HeroContainer = styled.div`
  height: 100vh;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  padding: 0 15rem 20rem 15rem;
`
export const Title = styled.h1`
  font-weight: 700;
  font-size: 4.5rem;
  margin-bottom: 5rem;
`
export const Paragraph = styled.p`
  font-size: 1.8rem;
  font-weight: 400;
  line-height: 35px;
  width: 70%;
  margin-bottom: 5rem;
`
export const Buttons = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const Play = styled(Link)`
  color: var(--color-secondary);
  font-size: 1.6rem;
  display: flex;
  align-items: center;
  font-weight: 600;
  text-decoration: underline;
`
