import styled from "styled-components";

export const Nav = styled.nav`
  position: fixed;
  left: 0;
  width: 100%;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: transparent;
  transition: all 1s ease-out;
  z-index: 100;

  h1 {
    font-family: "Cormorant SC", serif;
    font-size: 1.5rem;
    cursor: pointer;

    &:hover {
      opacity: 0.4;
      transition: all 0.6s ease-in;
    }
  }

  @media ${(props) => props.theme.device.laptop} {
    display: grid;
    grid-template-columns: 1fr 1fr;

    h1 {
      font-size: 2.2rem;
    }
  }
`;

export const NavR = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
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

export const Symbol = styled.div`
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`

export const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background: ${props => props.theme.color.cream};
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  ul {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  li {
    list-style: none;
    font-size: 1.2rem;

    &:hover {
      color: ${props => props.theme.color.blue};
      transition: all 0.3s ease;
    }
  }
`

export const CloseBtn = styled.div`
  color: ${props => props.theme.color.black};
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 2rem;
`
