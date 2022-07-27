import styled from "styled-components";

export const AboutUs = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 3fr 2fr;
  align-items: center;
  background: ${props => props.theme.color.cream};
  padding: 10rem;
`

export const AboutDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const AboutTitle = styled.div`
  
  p {
    letter-spacing: 1.5px;
    font-size: 0.8rem;
    line-height: 3rem;
  }

  h1 {
    font-size: 4rem;
    letter-spacing: 4px;
  }
`

export const AboutIntro = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  p {
    font-size: 0.8rem;
    letter-spacing: 1.5px;
    line-height: 1.5rem;
  }
`

export const AboutImage = styled.div`
  width: 100%;

  img {
    width: 100%;
  }
`