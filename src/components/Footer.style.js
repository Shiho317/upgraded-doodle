import styled from "styled-components";

export const FooterWrapper = styled.div`
  padding: 1.5rem;
  padding-top: 10rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: flex-end;
  background: ${(props) => props.theme.color.cream};
`;

export const Contact = styled.div`
  letter-spacing: 1.5px;

  h4 {
    font-size: 0.8rem;
    text-decoration: underline;
  }

  p {
    font-size: 0.6rem;
    line-height: 1rem;
  }
`;

export const CompAddress = styled.div`
  display: flex;
  justify-content: center;
  letter-spacing: 1px;

  p {
    font-size: 0.8rem;
  }
`;

export const Copyright = styled.div`
  display: flex;
  justify-content: flex-end;
  letter-spacing: 1px;

  p {
    font-size: 0.8rem;
  }
`;
