<template>
  <card slim>
    <edit-line slot="title" v-model="categoryName" editmode-by-default />
    <template slot="content">
      <ul class="skills">
        <li class="skill-item" v-for="skill in skills">
          <skill :skill="skill" />
        </li>
      </ul>
      <div class="bottom-line">
        <skill-add-line />
      </div>
    </template>
  </card>
</template>

<script>
import card from "../card";
import editLine from "../editLine";
import skill from "../skill";
import skillAddLine from "../skillAddLine";

const skills = [
  { id: 0, title: "Html", percent: 80 },
  { id: 1, title: "CSS", percent: 20 },
  { id: 2, title: "Javascript", percent: 30 },
];

export default {
  components: { skill, card, editLine, skillAddLine },
  data() {
    return {
      categoryName: "",
      skills,
    };
  },
};
</script>

<style lang="postcss">
.skill-item {
  margin-bottom: 30px;

  &:last-child {
    margin-bottom: 0;
  }
}

.bottom-line {
  margin-top: 70px;
  padding-left: 25%;
}
</style>
