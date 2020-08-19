<template>
  <card slim>
    <edit-line 
      slot="title" 
      v-model="categoryTitle" 
      :editModeByDefault="empty"
      @remove="$emit('remove', $event)"
    />
    <template slot="content">
      <ul class="skills" v-if="empty === false">
        <li class="item" v-for="skill in skills" :key="skill.id">
          <skill 
            :skill="skill"
            @remove="$emit('remove-skill', $event)"
            @approve="$emit('edit-skill', $event)"
          />
        </li>
      </ul>
      <div class="bottom-line">
        <skill-add-line :blocked="empty" />
      </div>
    </template>
  </card>
</template>

<script>
import card from "../card";
import editLine from "../editLine";
import skill from "../skill";
import skillAddLine from "../skillAddLine";

export default {
  components: {
    card, editLine, skill,
    skillAddLine
  },
  props: {
    empty: Boolean,
    title: {
      type: String,
      default: ""
    },
    skills: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      categoryTitle: this.title
    }
  }
}
</script>

<style lang="postcss">
  .item {
    margin-bottom: 30px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  .bottom-line {
    padding-top: 70px;
    margin-top: auto;
    padding-left: 25%;
  }
</style>
