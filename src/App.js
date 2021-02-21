import "./App.css";
import React from "react";
import styled from "styled-components";
import { HeadingOne } from "./typography";
import { CloudBrainsMenu } from "./components/CloudBrainsHero";

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <Wrapper>
      <HeadingOne>CloudBrains</HeadingOne>
      <CloudBrainsMenu />
    </Wrapper>
  );
}

export default App;
