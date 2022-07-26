import styled from "styled-components";

export const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: transparent;

  h1 {
    font-family: "Cormorant SC", serif;
    font-size: 2.2rem;
    color: ${(props) => props.theme.color.cream};
  }

  @media ${(props) => props.theme.device.laptop} {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

export const NavR = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${(props) => props.theme.color.cream};
`;

export const Menu = styled.ul`
  display: flex;
  align-items: center;
  gap: 4rem;
  cursor: pointer;

  li {
    list-style: none;

    &:hover {
      opacity: 0.5;
      transition: all 1s ease-in;
    }
  }
`;
