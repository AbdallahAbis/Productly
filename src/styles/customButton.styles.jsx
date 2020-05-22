import styled from "styled-components"
import { Link } from "gatsby"

export const Button = styled(Link)`
  border: ${({ notPrimary }) =>
    notPrimary ? "1px solid #bcd0e5" : "1px solid  var(--color-secondary)"};
  border-radius: 2px;
  padding: 1.2rem 2.5rem;
  background: ${({ notPrimary }) =>
    notPrimary ? "transparent " : "var(--color-secondary)"};
  color: ${({ notPrimary }) => (notPrimary ? " #000" : "var(--color-primary)")};
`
