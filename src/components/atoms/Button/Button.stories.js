// src/components/atoms/button/Button.stories.js

import Button from "./Button";

const storyConfig = {
  title: "Atoms/Button",
  component: Button,
  tags: ["autodocs"], // enables Docs tab
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "danger", "ghost"],
    },
    size: {
      control: "select",
      options: ["sm", "base", "lg"],
    },
    disabled: {
      control: "boolean",
    },
  },
};

export default storyConfig;
const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "Primary Button",
  variant: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: "Secondary Button",
  variant: "secondary",
};

export const Danger = Template.bind({});
Danger.args = {
  children: "Danger Button",
  variant: "danger",
};

export const Ghost = Template.bind({});
Ghost.args = {
  children: "Ghost Button",
  variant: "ghost",
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: "Disabled Button",
  disabled: true,
};
