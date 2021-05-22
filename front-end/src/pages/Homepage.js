import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";

const Homepage = () => {
  return (
    <Layout>
      <StyledSection></StyledSection>
    </Layout>
  );
};

const StyledSection = styled.section`
  color: ${(p) => p.theme.colors.blue.default};
`;

export default Homepage;
