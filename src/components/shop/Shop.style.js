import styled from "styled-components";

export const ShopCont = styled.div`
  position: relative;
  display: flex;
  padding: 2rem;
  padding-bottom: 20rem;
  justify-content: space-between;
  background: ${(props) => props.theme.color.cream};
`;

export const ShopTitle = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 400px;

  h2 {
    font-size: 2.5rem;
  }

  p {
    width: 60%;
    font-size: 0.8rem;
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
    width: 60%;
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
    width: 60%;
    text-align: center;
    font-size: 0.8rem;
  }
`


