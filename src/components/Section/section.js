import React from "react";
import styled from "styled-components";

const SectionStyled = styled.div`
  display: flex;
  flex-direction: row;
  > * {
    margin: 1rem;
  }
`;

export const Section = ({ children }) => {
  return <SectionStyled>{children}</SectionStyled>;
};
