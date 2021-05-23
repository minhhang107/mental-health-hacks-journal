import styled from "styled-components";
export const PageTitle = styled.h1`
  font-size: 3.8rem;
  line-height: 4rem;
  font-weight: bold;
  margin-bottom: ${(p) => p.theme.spacing[1]};
  font-family: ${(p) => p.theme.fontFamily.serif};
`;

export const SectionTitle = styled.h2`
  font-weight: bold;
  color: #204553;
  font-size: 1.8rem;
  line-height: 3.1rem;
  margin-bottom: 1.4rem;
`;

export const SectionTitleUnderline = styled.h2`
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

export const Title = styled.h1`
  font-size: 2.4rem;
  font-weight: 700;
  line-height: 3.125rem;
`;

export const Header = styled.header``;
