<template>
  <ul class="tags-list-component">
    <li class="item" v-for="tag in tagsArray" :key="tag">
      <tag :title="tag"/>
    </li>
  </ul>
</template>

<script>
  import tag from "../tag";
  export default {
    components: {tag},
    props: {
      tags: String
    },
    computed: {
      tagsArray() {
        return this.tags.split(",");
      }
    }
  }
</script>

<style scoped lang="postcss">
  ul {
    display: flex;
  }

  li {
    margin-right: 10px;

    &:last-child {
      margin-right: 0;
    }
  }
</style>