import skill from "./skill";
import {action} from "@storybook/addon-actions";

const methods = {
  onRemove: action("onRemove"),
  onApprove: action("onApprove")
};

export default {
  title: "skill",
  components: { skill },
};

export const defaultView = () => ({
  components: { skill },
  data: () => ({
    skill: {
      id: 0,
      title: "Git",
      percent: "80",
    },
  }),
  template: `
    <skill :skill="skill" @remove="onRemove" @approve="onApprove"/>
  `,
  methods
});
