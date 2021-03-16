import React from "react";
import styled, { css } from "styled-components";
import { HeadingOne } from "../../typography";
import { Animation } from "./test";
import brains from "./brains.png";
import cloud from "./cloud.png";
import logo from "./CloudBrains-Logo.svg";
import { useSpring, animated } from "react-spring";

export const Brains = styled.img.attrs({
  src: brains,
  alt: "CloudBrains",
})``;

export const Cloud = styled.img.attrs({
  src: cloud,
  alt: "Cloud",
})`
  position: absolute;
  /* top: 0;
  left: 2rem; */
  opacity: 0.8;
`;

export const Logo = styled.img.attrs({
  src: logo,
  alt: "CloudBrainsLogo",
})``;

const Wrapper = styled.div`
  background: linear-gradient(#67bfd9, #ffffff);
  width: 100%;
`;

const Content = styled.div`
  padding: 3rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const WrapperTwo = styled.div`
  display: flex;
  flex-direction: row;
`;

export const CloudBrainsHeader = () => {
  // const props = useSpring({
  //   config: { duration: 2500 },
  //   from: { marginLeft: -800, opacity: 0 },
  //   to: { marginLeft: 800, opacity: 1 },
  // });
  return (
    <Wrapper>
      <Content>
        {/* <animated.div style={props}>
          <Cloud />
        </animated.div> */}
        <WrapperTwo>
          <Animation />
        </WrapperTwo>
        <Brains />
        <Logo />
        <HeadingOne>
          Having your head in the clouds isn’t a bad thing.
        </HeadingOne>
      </Content>
    </Wrapper>
  );
};
