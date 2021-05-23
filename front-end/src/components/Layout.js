import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";

const Layout = ({ children, className }) => {
  return (
    <>
      <StyledMain className={className}>{children}</StyledMain>
      <Navbar />
    </>
  );
};

const StyledMain = styled.main`
  height: 100%;
`;

export default Layout;
