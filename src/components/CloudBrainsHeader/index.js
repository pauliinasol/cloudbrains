import React from "react";
import styled from "styled-components";
import { HeadingOne } from "../../typography";
import brains from "./brains.png";

export const Brains = styled.img.attrs({
  src: brains,
  alt: "CloudBrains",
})``;

const Wrapper = styled.div`
  background: linear-gradient(#67bfd9, #ffffff);
  width: 100%;
`;

const Content = styled.div`
  padding: 4rem;
  margin-top: 3rem;
  margin-bottom: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const CloudBrainsHeader = () => {
  return (
    <Wrapper>
      <Content>
        <Brains />
        <HeadingOne>CloudBrains</HeadingOne>
      </Content>
    </Wrapper>
  );
};
