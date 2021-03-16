import styled from "styled-components";
import cloudbrains_menu from "./cloudbrains_menu.png";
import { Section } from "../Section/section";

export const CloudBrainsMenuPicture = styled.img.attrs({
  src: cloudbrains_menu,
  alt: "CloudBrains",
})``;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4rem;
  width: 30rem;
`;

const TextBlock = styled.div`
  padding: 0.5rem;
  font-size: 1rem;
  line-height: 1.5;
`;

export const CloudBrainsMenu = () => {
  return (
    <Section>
      <CloudBrainsMenuPicture />
      <Text>
        <TextBlock>
          Cloud Brains is a simple macOS application that makes it easy to
          manage your own cloud based knowledge base.
        </TextBlock>
        <TextBlock>
          Cloud Brains automates the versioning and backing up your knowledge to
          the cloud, so that you can focus on creating it, with the writing
          tools that you prefer.
        </TextBlock>
      </Text>
    </Section>
  );
};
