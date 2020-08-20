import tagsAdder from "./tagsAdder.vue";

export default {
  title: "tagsAdder",
  components: {tagsAdder}
}

export const defaultView = () => ({
  components: { tagsAdder },
  data() {
    return {
      tags: "One, two, three, four"
    }
  },
  template: `
    <div>
      <pre>{{tags}}</pre>
      <tags-adder  v-model="tags" />
    </div>
  `
});

defaultView.story = {
  name: "Стандартный вид",
  parameters: {
    backgrounds: [
      { name: 'grey', value: '#8395a7', default: true },
    ],
  },
};
