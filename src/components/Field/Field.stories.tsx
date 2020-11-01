import { Meta, Story } from "@storybook/react";
import { Field, FieldProps } from "theme-ui";

export default {
  title: "Field",
  component: Field,
} as Meta;

const Template: Story<FieldProps<"input">> = (args) => <Field {...args} />;

export const Default = Template.bind({});
Default.args = { label: "Default Field", name: "field", placeholder: "" };
