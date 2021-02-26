import "./App.css";
import React from "react";
import styled from "styled-components";
import { CloudBrainsMenu } from "./components/CloudBrainsMenu";
import { CloudBrainsHeader } from "./components/CloudBrainsHeader";

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
      <CloudBrainsHeader />

      <CloudBrainsMenu />
    </Wrapper>
  );
}

export default App;
