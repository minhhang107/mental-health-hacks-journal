import styled, { css } from "styled-components";

const contained = css`
  --bg-opacity: 0.4;
  border-radius: ${(p) => p.theme.rounded.default};
  background-color: #ffd6a6;
  padding: ${(p) => p.theme.spacing[3]} ${(p) => p.theme.spacing[6]};
`;

const Button = styled.button`
  text-align: center;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  background-color: transparent;

  ${(p) => p.contained && contained}
`;

export default Button;
