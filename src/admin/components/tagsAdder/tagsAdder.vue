<template>
  <div class="tags-adder-component">
    <app-input 
      title="Добавление тэга" 
      v-model="currentTags" 
      @input="$emit('change', currentTags)"
    />
    <ul class="tags">
      <li class="tag" v-for="( tag, index ) in tagsArray" :key="`${tag}${index}`">
        <tag @click="removeTag(tag)" v-if="tag.trim()" :title="tag.toUpperCase()" interactive />
      </li>
    </ul>
  </div>
</template>

<script>
import appInput from "../input";
import tag from "../tag";
export default {
  props: {
    tags: {
      type: String,
      default: ""
    }
  },
  model: {
    prop: "tags",
    event: "change"
  },
  computed: {
    tagsArray() {
      return this.tags.trim().split(",");
    },
  },
  data() {
    return {
      currentTags : this.tags
    }
  },
  methods: {
    removeTag(tag) {
      const tags = [...this.tagsArray];
      const tagNdx = tags.indexOf(tag);

      if (tagNdx < 0) return;
      this.tagsArray.splice(tagNdx, 1)
      this.currentTags = this.tagsArray.join(", ");

      this.$emit("change", this.currentTags);
    },
  },
  components: {
    appInput,
    tag,
  },
};
</script>

<style lang="postcss" scoped>
.tags {
  display: flex;
  margin-top: 20px;
}

.tag {
  margin-right: 10px;
}
</style>