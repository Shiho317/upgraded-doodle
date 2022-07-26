import styled from "styled-components";

export const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: transparent;

  h1 {
    font-family: "Cormorant SC", serif;
    font-size: 2.2rem;
    color: ${(props) => props.theme.color.cream};
    cursor: pointer;

    &:hover {
      opacity: 0.4;
      transition: all 0.6s ease-in;
    }
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
    letter-spacing: 2px;

    &:hover {
      opacity: 0.4;
      transition: all 0.6s ease-in;
    }
  }
`;
