import styled from "styled-components";

export const AboutUs = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  gap: 2rem;
  flex-direction: column-reverse;
  align-items: center;
  background: ${props => props.theme.color.cream};
  padding: 10rem;

  @media ${props => props.theme.device.laptop}{
    display: grid;
    grid-template-columns: 3fr 2fr;
    align-items: center;
  }
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
    line-height: 1rem;
  }

  h1 {
    font-size: 2rem;
    letter-spacing: 2px;
  }

  @media ${props => props.theme.device.laptop}{
    p{
      font-size: 0.8rem;
      line-height: 3rem;
    }

    h1{
      font-size: 4rem;
      letter-spacing: 4px;
    }
  }
`

export const AboutIntro = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  p {
    font-size: 0.8rem;
    letter-spacing: 1.5px;
    line-height: 1.5rem;
    word-break: break-all;
  }

  @media ${props => props.theme.device.laptop}{
    width: 70%;

    p {
      letter-spacing: 1.5px;
      line-height: 1.5rem;
      word-break: normal;
    }
  }
`

export const AboutImage = styled.div`

  img {
    width: 20rem;
    height: 15rem;
  }

  @media ${props => props.theme.device.laptop}{
    width: 100%;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
    }
  }

  
  
`