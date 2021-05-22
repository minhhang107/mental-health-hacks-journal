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

export const Footer = styled.footer`
  text-align: center;

  && {
    margin-top: ${(p) => p.theme.spacing[3]};
  }
`;

export const Button = styled(BaseButton)`
  && {
    display: block;
    margin: ${(p) => p.theme.spacing[4]} auto 0 auto;
  }
`;

export const PageTitle = styled.h1`
  font-size: 3.8rem;
  line-height: 4rem;
  font-weight: bold;
  margin-top: ${(p) => p.theme.spacing[0]};
  margin-bottom: ${(p) => p.theme.spacing[1]};
`;

export const Wrapper = styled.section`
  --px: ${(p) => p.theme.spacing[4]};

  padding: 0rem var(--px) 4rem var(--px);
`;

export const Container = styled.div`
  display: flex;

  > svg {
    color: "#A9C8FF";
  }
`;
