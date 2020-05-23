import styled from "styled-components"
import { Link } from "gatsby"

export const Button = styled(Link)`
  height: 5rem;
  font-size: 1.6rem;
  font-weight: 700;
  border: ${({ notPrimary }) =>
    notPrimary ? "1px solid rgb(188,208,229)" : "none"};
  border-radius: 2px;
  padding: 1.2rem 2.5rem;
  background: ${({ notPrimary }) =>
    notPrimary ? "transparent " : "var(--color-secondary)"};
  color: ${({ notPrimary }) => (notPrimary ? " #000" : "var(--color-primary)")};

  &:hover {
    background: ${({ notPrimary }) =>
      notPrimary
        ? "rgba(188,208,229, .3)"
        : "rgba(var(--color-secondary-rgb), 0.85)"};
  }
`
