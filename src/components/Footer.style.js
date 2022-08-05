import styled from "styled-components";

export const FooterWrapper = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: ${(props) => props.theme.color.cream};
  gap: 1rem;

  @media ${props => props.theme.device.laptop}{
    padding-top: 10rem;
    align-items: flex-end;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 0;
  }
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
