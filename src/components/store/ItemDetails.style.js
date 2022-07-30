import styled from "styled-components";

export const ItemDetailsWrapper = styled.div`
  width: 100%;
  background: ${props => props.theme.color.greenblue};
  display: flex;
  flex-direction: column;
  padding: 0 15rem;
  gap: 1rem;
  padding-bottom: 15rem;

  ul {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  li {
    font-size: 1.2rem;
    list-style: none;
    color: ${(props) => props.theme.color.cream};
    cursor: pointer;
    font-family: "Cormorant SC", serif;
  }
`

export const TitleWrapper = styled.div`
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 4rem;
    font-family: "Cormorant SC", serif;
    color: ${props => props.theme.color.cream};
  }
`

export const Details = styled.div`
  width: 100%;
  background: white;
  display: flex;
  padding: 2rem;
  gap: 2rem;
`

export const DescWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  
  h3 {
    font-size: 1.2rem;
  }

  h2 {
    font-size: 1.5rem;
  }
  
ul {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 1rem;
  padding-bottom: 1rem;
}

li {
  display: flex;
  justify-content: flex-start;
  border-top: 1px solid #d9d9d9;
  align-items: center;

  &:last-child {
    border-bottom: 1px solid #d9d9d9;
  }

  & p {
    flex: 1;
    width: 300px;
    color: ${props => props.theme.color.black};
    font-size: 0.8rem;
  }

  & .cart-btn {
    flex: 2;
    display: flex;
    align-items: center;
    justify-content: center;

    & button {
      background: #0076d7;
      border: none;
      width: 10rem;
      height: 2.5rem;
      border-radius: 5px;
      color: ${props => props.theme.color.cream};
      cursor: pointer;

      &:hover {
        background: blue;
        transition: all 0.3s ease;
      }
    }
  }
}
`

export const Desc = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  p {
    font-size: 0.8rem;
  }
`

export const DescB = styled.div`
  
`

export const ImageWrapper = styled.div`
  flex: 1;

  img {
    width: 100%;
  }
`

export const Icons = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  padding: 1.5rem;
`;

export const Icon = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 5px;
  background: ${(props) => props.theme.color.black};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.color.cream};
  font-size: 1.3rem;
  cursor: pointer;
`;
