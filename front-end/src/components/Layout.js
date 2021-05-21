import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";

const Layout = ({ children, className }) => {
  return (
    <>
      <Navbar />
      <StyledMain className={className}>{children}</StyledMain>
    </>
  );
};

const StyledMain = styled.main``;

export default Layout;
