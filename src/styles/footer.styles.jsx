import styled, { css } from "styled-components"
import { Link } from "gatsby"

const flex = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const grid = css`
  height: 100%;

  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: max-content 1fr;
  align-items: center;
  justify-items: start;
`

export const FooterContainer = styled.div`
  height: 30rem;
  padding-top: 10rem;
  font-size: 1.6rem;
  ${flex}
  div {
    ${grid}
  }
  .logo {
    align-self: start;
  }
  h3 {
    grid-row: 1;
    margin-bottom: 3.5rem;
  }
`

export const StyledLink = styled(Link)`
  font-size: 1.4rem;
`
