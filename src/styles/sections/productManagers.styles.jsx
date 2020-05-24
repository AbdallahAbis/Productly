import styled from "styled-components"
import CorrectSVG from "../../images/correct.svg"

export const ProductManagersContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 10rem;
  align-items: center;
  justify-items: start;

  height: 55rem;

  padding: 0 15rem;
  margin: 5rem 0;

  h2 {
    font-weight: 700;
    font-size: 3.5rem;
    margin-bottom: 2.5rem;
  }

  p {
    font-size: 1.4rem;
    padding-right: 10rem;
    &:not(:first-child) {
      margin-bottom: 3rem;
    }
  }

  svg {
    height: 100%;
  }
`
export const Correct = styled.p`
  position: relative;
  padding-left: 4rem;
  &::before {
    content: ${`url(${CorrectSVG})`};
    display: inline-block;
    height: 3rem;
    width: 3rem;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
  }
`
