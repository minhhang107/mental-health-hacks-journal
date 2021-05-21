import styled from "styled-components";

const Wrapper = styled.section`
  --px: ${(p) => p.theme.spacing[4]};

  padding: 7rem var(--px) 4rem var(--px);
`;

export default Wrapper;
