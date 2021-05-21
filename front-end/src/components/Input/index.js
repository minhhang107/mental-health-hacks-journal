import React from "react";
import * as Styled from "./Input.styled";

const Input = ({ icon, ...inputProps }) => {
  return (
    <Styled.Container>
      {icon}
      <Styled.Input {...inputProps} />
    </Styled.Container>
  );
};

export default Input;
