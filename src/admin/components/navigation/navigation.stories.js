import navigation from "./navigation";

export default {
  title: "navigation",
  components: { navigation }
}

export const defaultView = () => ({
  components: { navigation },
  template: `
    <navigation /> 
  `
})