import styled from "styled-components";

export const StoreWrapper = styled.div`
  width: 100%;
  background: ${(props) => props.theme.color.greenblue};
  padding: 10rem 0;
`;

export const Header = styled.div`
  width: 70%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;

  h3 {
    color: ${(props) => props.theme.color.cream};
    font-family: "Cormorant SC", serif;
  }

  ul {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  li {
    font-size: 1rem;
    list-style: none;
    color: ${(props) => props.theme.color.cream};
    cursor: pointer;
    font-family: "Cormorant SC", serif;
  }
`;

export const StoreContents = styled.div`
  width: 70%;
  margin: 0 auto;
  display: flex;

  ul {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 4rem;
  }

  li {
    list-style: none;
    color: ${(props) => props.theme.color.cream};
    font-size: 0.8rem;
    cursor: pointer;
  }
`;

export const ItemsWrapper = styled.div`
  flex: 3;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
`;

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
