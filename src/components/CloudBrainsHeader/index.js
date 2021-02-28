import React from "react";
import styled from "styled-components";
import { HeadingOne } from "../../typography";
import brains from "./brains.png";
import logo from "./CloudBrains-Logo.png";

export const Brains = styled.img.attrs({
  src: brains,
  alt: "CloudBrains",
})``;

export const Logo = styled.img.attrs({
  src: logo,
  alt: "CloudBrainsLogo",
})``;

const Wrapper = styled.div`
  background: linear-gradient(#67bfd9, #ffffff);
  width: 100%;
`;

const Content = styled.div`
  padding: 4rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
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
        <Logo />
        <HeadingOne>
          Having your head in the clouds isn’t a bad thing.
        </HeadingOne>
      </Content>
    </Wrapper>
  );
};
