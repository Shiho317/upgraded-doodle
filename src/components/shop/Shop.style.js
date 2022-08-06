import styled from "styled-components";

export const ShopCont = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  padding-bottom: 10rem;
  justify-content: space-between;
  background: ${(props) => props.theme.color.cream};
  gap: 1rem;

  @media ${props => props.theme.device.laptop}{
    padding-button: 20rem;
    flex-direction: row;
    gap: 0;
  }
`;

export const ShopTitle = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 200px;

  h2 {
    font-size: 2.5rem;
  }

  p {
    width: 60%;
    font-size: 0.8rem;
  }

  @media ${props => props.theme.device.laptop}{
    height: 400px;
  }
`;

export const ShopDetails = styled.div`
  flex: 2.5;
  display: flex;
  flex-direction: column;
  gap: 5rem;
`;

export const ItemImages = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 3fr 2fr;
`;

export const ImageTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  img {
    width: 100%;
    height: 100%;
  }

  p {
    font-size: 0.8rem;
  }
`;

export const ShopBtn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  button {
    width: 100%;
    height: 4rem;
    background-color: ${props => props.theme.color.orange};
    border: none;
    font-size: 1.2rem;
    color: white;
    cursor: pointer;

    &:hover {
      opacity: 0.3;
      transition: all 0.3s ease-in;
    }
  }

  p {
    width: 100%;
    text-align: center;
    font-size: 0.8rem;
  }

  @media ${props => props.theme.device.laptop}{
    button {
      width: 60%;
    }

    p {
      width: 60%;
    }
  }
`


