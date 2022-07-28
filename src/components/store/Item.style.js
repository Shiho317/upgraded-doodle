import styled from "styled-components";

export const ItemWrapper = styled.div`
  img {
    width: 200px;
  }

  p {
    font-size: 0.8rem;
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.color.cream};
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
`;
