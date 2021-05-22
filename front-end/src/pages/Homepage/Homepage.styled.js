import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const SectionsWrapper = styled.div`
  margin-top: ${(p) => p.theme.spacing[5]};

  > * + * {
    margin-top: ${(p) => p.theme.spacing[4]};
  }
`;

export const SectionTitle = styled.h2`
  font-weight: bold;
  font-size: 1.8rem;

  ::after {
    width: 4rem;
    height: 0.5rem;
    margin-top: ${(p) => p.theme.spacing[1]};
    content: "";
    display: block;
    background: linear-gradient(
      262.83deg,
      #a9c8ff -9.45%,
      ${(p) => p.theme.colors.blue.default} 88.41%
    );
  }
`;

export const EditButton = styled.button`
  background: #ffc076;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${(p) => p.theme.rounded.default};
  padding: ${(p) => p.theme.spacing[2]} ${(p) => p.theme.spacing[3]};
  margin-left: ${(p) => p.theme.spacing[2]};
  margin-bottom: ${(p) => p.theme.spacing[4]};
  width: 100%;

  > svg {
    margin-right: ${(p) => p.theme.spacing[2]};
  }
`;

export const SectionBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: ${(p) => p.theme.spacing[4]};
`;
