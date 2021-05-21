import styled from "styled-components";

export const Container = styled.div`
  --bg-opacity: 0.2;
  padding: ${(p) => p.theme.spacing[3]} ${(p) => p.theme.spacing[4]};
  background-color: ${(p) => p.theme.colors.blue.default};
  border-radius: 1.2rem;
  overflow: hidden;
  display: flex;

  > svg {
    color: "#A9C8FF";
  }
`;

export const Input = styled.input`
  border: none;
  text-align: center;
  background-color: transparent;
  width: 100%;

  ::placeholder {
    color: ${(p) => p.theme.colors.text.default};
    text-align: center;
  }

  :focus-visible {
    outline: none;
  }
`;
