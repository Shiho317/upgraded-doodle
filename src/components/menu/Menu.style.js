import styled from "styled-components";

export const MenuCont = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  padding-bottom: 10rem;
  justify-content: space-between;
  background: ${(props) => props.theme.color.cream};

  @media ${props => props.theme.device.laptop}{
    flex-direction: row;
  }

  h2 {
    font-size: 2.5rem;
    flex: 1;
  }
`;

export const MenuDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
  flex: 2.5;
`;

export const CoffeeImages = styled.div`
  width: 100%;
  overflow: scroll;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Coffee = styled.div`
  width: 150px;
  height: 220px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

img {
    width: 150px;

  }

  p {
    font-size: 0.8rem;
  }

  @media ${props => props.theme.device.laptop}{
    width: 320px;
    height: 400px;

    img {
      width: 100%;
    }
  }

  
`;

export const OtherMenu = styled.div`
  h3 {
    letter-spacing: 1.5px;
    font-size: 1rem;
    line-height: 2rem;
  }

  .add-info {
    color: #9b9a91;
    font-size: 0.8rem;
  }
`;

export const OtherMenuTop = styled.div`
  border-top: 1px solid ${(props) => props.theme.color.black};
  height: 10rem;
  padding: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  h1 {
    letter-spacing: 1.5px;
    font-size: 1.2rem;
  }

  @media ${props => props.theme.device.laptop}{
    h1 {
    letter-spacing: 1.5px;
    font-size: 1.8rem;
  }
  }
`;

export const OtherMenuDetails = styled.div`
  border-top: 1px solid #d9d9d9;
  height: 10rem;
  padding: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  h1 {
    letter-spacing: 1.5px;
    font-size: 1.2rem;
  }

  @media ${props => props.theme.device.laptop}{
    h1 {
    letter-spacing: 1.5px;
    font-size: 1.8rem;
  }
  }
`;

export const DrinkTemp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  font-size: 0.8rem;

  @media ${props => props.theme.device.laptop}{
    font-size: 1rem;
  }
`;

export const DrinkSize = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 1rem;
  font-size: 0.8rem;

  @media ${props => props.theme.device.laptop}{
    font-size: 1rem;
  }
`;
