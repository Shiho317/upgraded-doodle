import styled from "styled-components";

export const LocationCont = styled.div`
  width: 100%;
  background: ${props => props.theme.color.cream};

  h3 {
    margin: 1.5rem;
    margin-top: 5rem;
  }
`

export const LocationImg = styled.div`
  width: 100%;
  height: 450px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  img {
    width: 100%;
  }
`

export const LocationsDetails = styled.div`
  width: 100%;
  height: 15rem;
  display: flex;
  align-items: flex-start;
  padding: 1.5rem;
`

export const Address = styled.div`
  flex: 1;

  p {
    font-size: 0.8rem;
    line-height: 1.5rem;
  }
`

export const Greeting = styled.div`
  flex: 2.5;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  p {
    width: 40%;
    font-size: 0.8rem;
    line-height: 1.5rem;
  }

  ul {
    width: 30%;
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
  }

  li {
    list-style: none;
    font-size: 1rem;
    cursor: pointer;

    &:hover {
      opacity: 0.3;
      transition: all 0.3s ease-in;
    }
  }
`