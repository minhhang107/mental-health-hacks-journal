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
