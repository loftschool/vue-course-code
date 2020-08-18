import user from "./user";

export default {
  title: "user",
  components: {user}
}

export const defaultView = () => ({
  components: {user},
  template: `
    <user /> 
  `
})