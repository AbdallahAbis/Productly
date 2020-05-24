import styled from "styled-components"

import WeDo from "../../images/what-we-do.inline.svg"

export const WeDoContainer = styled.div`
  height: 50rem;
  width: 100%;
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Background = styled(WeDo)`
  position: absolute;
  top: -55%;
  width: 103%;
  z-index: -1;
`
export const Title = styled.h2`
  font-weight: 700;
  font-size: 3.6rem;
  text-align: center;
  margin-bottom: 6rem;
`
export const ServicesContainer = styled.div`
  padding: 0 15rem;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  justify-items: center;
  margin-bottom: 6rem;
`
export const Card = styled.div`
  width: 70%;

  img {
    height: 5rem;
    width: 5rem;
  }
`
export const Icon = styled.div`
  height: 5rem;
  width: 5rem;
  background: ${({ color }) => color};
  border-radius: 10px;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 3rem;

  box-shadow: ${({ color }) => `5px 5px 25px 0px ${color}`};

  img {
    height: 2rem;
  }
`
export const CardTitle = styled.h3`
  font-weight: 600;
  font-size: 2rem;
  margin-bottom: 1.5rem;
`
export const CardInfo = styled.p`
  font-size: 1.4rem;
`
