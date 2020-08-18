import headline from "./headline";

export default {
  title: "headline",
  components: {headline}
}

export const defaultView = () => ({
  components: {headline},
  template: `
    <headline>
      <h1>Content</h1>
    </headline> 
  `
});
