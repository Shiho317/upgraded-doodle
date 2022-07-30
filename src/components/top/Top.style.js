import styled from "styled-components";

export const TopP = styled.div`
position: relative;
width: 100%;
height: 100vh;
background: ${(props) => props.theme.color.blue};
display: grid;
grid-template-columns: 1fr 1fr;
align-items: center;
`;

export const Titles = styled.div`
  width: 100%;
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr;
  color: ${props => props.theme.color.cream};
  line-height: 2rem;
  letter-spacing: 2px;
`

export const Title1 = styled.div`
  padding: 1.5rem;
`

export const Title2 = styled.div`
  text-align: center;
`

export const Slides = styled.div`
  width: 100%;

  img {
    width: 100%;
  }
`

export const TopFooter = styled.div`
  position: absolute;
  bottom: 1.5rem;
  left: 0;
  display: flex;
  justify-content: space-between;
  padding: 0 1.5rem;
  width: 100%;

  p {
    color: ${props => props.theme.color.cream};
    letter-spacing: 2px;
    font-size: 0.8rem;
  }

  button {
    background: none;
    border: none;
    color: ${props => props.theme.color.cream};
    font-size: 1rem;
    letter-spacing: 1.5px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
`
