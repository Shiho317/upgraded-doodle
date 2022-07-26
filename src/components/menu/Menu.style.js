import styled from "styled-components";

export const MenuCont = styled.div`
  position: relative;
  display: flex;
  padding: 2rem;
  justify-content: space-between;
  background: ${props => props.theme.color.cream};

  h2 {
    font-size: 2.5rem;
  }
`

export const MenuDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
`

export const CoffeeImages = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const Coffee = styled.div`
  width: 320px;
  height: 400px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  img {
    width: 100%;
  }

  p {
    font-size: 0.8rem;
  }
`

export const OtherMenu = styled.div`
  
  h3 {
    letter-spacing: 1.5px;
    font-size: 1rem;
    line-height: 2rem;
  }

  .add-info {
    color: #9B9A91;
    font-size: 0.8rem;
  }
`

export const OtherMenuTop = styled.div`
  border-top: 1px solid ${props => props.theme.color.black};
  height: 10rem;
  padding: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  h1 {
    letter-spacing: 1.5px;
    font-size: 1.8rem;
  }
`

export const OtherMenuDetails = styled.div`
  border-top: 1px solid #D9D9D9;
  height: 10rem;
  padding: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  h1 {
    letter-spacing: 1.5px;
    font-size: 1.8rem;
  }
`

export const DrinkTemp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`

export const DrinkSize = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 1rem;
`