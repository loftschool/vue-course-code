import category from "./category"
import { action } from "@storybook/addon-actions";

const methods = {
  onRemove: action("onRemove")
}

export default {
  title: "category",
  components: {category}
}

const skills = [
  {id: 0, title: "CSS", percent: 80},
  {id: 0, title: "HTML", percent: 50},
]

export const defaultView = () => ({
  components: {category},
  data() {
    return {
      title: "Frontend",
      skills
    }
  },
  template: `
    <category
      :title="title"
      :skills="skills" 
      @remove="onRemove"
    /> 
  `,
  methods
})