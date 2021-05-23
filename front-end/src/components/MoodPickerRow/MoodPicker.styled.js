import styled from "styled-components";

export const MoodButton = styled.button`
  transition: background-color 100ms linear;

  background-color: ${(p) =>
    p.isSelected ? p.theme.colors.blue.default : "#ecf3fa"};
  padding: ${(p) => p.theme.spacing[4]} ${(p) => p.theme.spacing[2]};
`;

export const Wrapper = styled.ul`
  display: flex;
  border-radius: ${(p) => p.theme.rounded.default};
  overflow: hidden;
  width: max-content;
  margin-left: auto;
  margin-right: auto;

  justify-content: center;
  > * + * {
    margin-left: 1px;
  }
`;
