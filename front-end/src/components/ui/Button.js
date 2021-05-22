import styled, { css } from "styled-components";

const contained = css`
  --bg-opacity: 0.4;
  border-radius: ${(p) => p.theme.rounded.default};
  background-color: ${(p) => p.theme.colors.orange};
`;

const Button = styled.button`
  text-align: center;
  padding: ${(p) => p.theme.spacing[3]} ${(p) => p.theme.spacing[6]};
  font-weight: 500;

  ${(p) => p.contained && contained}
`;

export default Button;
