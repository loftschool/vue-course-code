import category from "./category"

export default {
  title: "category",
  components: {category}
}

export const defaultView = () => ({
  components: {category},
  template: `
    <category /> 
  `
})