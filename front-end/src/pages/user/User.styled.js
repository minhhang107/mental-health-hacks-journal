import BaseButton from "components/ui/Button";
import styled from "styled-components";

export const Section = styled.section`
  margin-top: ${(p) => p.theme.spacing[4]};
`;

export const Form = styled.form`
  > * + * {
    margin-top: ${(p) => p.theme.spacing[2]};
  }
`;

export const PageTitle = styled.h1`
  font-size: 3.8rem;
  line-height: 4rem;
  font-weight: bold;
  margin-top: ${(p) => p.theme.spacing[0]};
  margin-bottom: ${(p) => p.theme.spacing[1]};
  font-family: ${(p) => p.theme.fontFamily.serif};
`;

export const Footer = styled.footer`
  text-align: center;

  && {
    margin-top: ${(p) => p.theme.spacing[2]};
  }
`;

export const Wrapper = styled.section`
  --px: ${(p) => p.theme.spacing[4]};

  padding: 0rem var(--px) 4rem var(--px);
`;

export const Button = styled(BaseButton)`
  && {
    display: block;
    margin: ${(p) => p.theme.spacing[3]} auto 0 auto;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;

  > svg {
    color: "#A9C8FF";
  }
`;

export const Error = styled.div`
  text-align: center;
  color: #e2522c;
`;
