import roundBtn from "../../button.vue";
import { action } from "@storybook/addon-actions";

const methods = {
  onClick: action("onClick")
}

export default {
  title: "button/round",
  component: roundBtn,
};

export const defaultView = () => ({
  components: { roundBtn },
  template: `
    <round-btn type="round" @click="onClick" />
  `,
  methods
});

defaultView.story = {
  name: "Стандартный вид",
};
