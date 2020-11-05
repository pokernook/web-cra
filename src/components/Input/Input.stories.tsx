import { Meta, Story } from "@storybook/react";
import { Input, InputProps, Label } from "theme-ui";

export default {
  title: "Input",
  component: Input,
} as Meta;

const Template: Story<InputProps> = (args) => (
  <>
    <Label mb={1} htmlFor={args.id}>
      With label
    </Label>
    <Input {...args} ref={null} />
  </>
);

export const WithLabel = Template.bind({});
WithLabel.args = {
  type: "text",
  id: "input",
  name: "input",
  placeholder: "",
};
