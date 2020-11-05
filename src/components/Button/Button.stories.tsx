import { Meta, Story } from "@storybook/react";
import { Button, ButtonProps } from "theme-ui";

export default {
  title: "Button",
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = { children: "Primary button", variant: "primary" };
