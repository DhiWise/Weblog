import { TextArea } from "components";
export default {
  title: "weblog/TextArea",
  component: TextArea,
};

export const SampleTextarea = (args) => <TextArea {...args} />;

SampleTextarea.args = {
  shape: "RoundedBorder8",
  variant: "OutlineBluegray700",
  size: "sm",
  placeholder: "placeholder",
};
